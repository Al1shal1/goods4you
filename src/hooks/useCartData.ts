import { useEffect, useState, useMemo } from "react";
import { useFetchCartsByUserQuery } from "@api/cartApi";
import { productApi } from "@api/productApi";
import { useAppDispatch, useAppSelector } from "./redux";
import { selectUserId } from "@store/userSlice";

export const useCartData = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(selectUserId);
    const { data: cartData, isLoading: isCartLoading, error: cartError } = useFetchCartsByUserQuery(userId);
    const cart = cartData?.carts?.[0];

    const [productsStock, setProductsStock] = useState<{ [key: number]: number }>({});

    const productIds = useMemo(() => {
        return cart?.products?.map((product) => product.id) ?? [];
    }, [cart?.products]);

    useEffect(() => {
        if (productIds.length === 0) return;

        const fetchStocks = async () => {
            try {
                const results = await Promise.allSettled(
                    productIds.map((id) =>
                        dispatch(productApi.endpoints.getSingleProduct.initiate(id)).unwrap()
                    )
                );

                const stockMap = results.reduce((acc, result, index) => {
                    if (result.status === "fulfilled") {
                        acc[productIds[index]] = result.value.stock;
                    } else {
                        console.error(
                            `Error fetching product with id ${productIds[index]}:`,
                            result.reason
                        );
                    }
                    return acc;
                }, {} as { [key: number]: number });

                setProductsStock(stockMap);
            } catch (error) {
                console.error("Error while retrieving product stock:", error);
            }
        };

        fetchStocks();
    }, [productIds, dispatch]);

    return {
        cart,
        productsStock,
        isLoading: isCartLoading,
        error: cartError,
    };
};
