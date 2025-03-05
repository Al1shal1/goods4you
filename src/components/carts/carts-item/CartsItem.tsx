import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CartsItem.module.scss";
import cn from "classnames";
import basket from "@icons/basket.svg";
import { CountBtn } from "@ui-kit/count-btn";
import { RedButton } from "@ui-kit/red-button";
import { IProduct } from "@models/IProduct";
import { usePriceCalculation } from "@hooks/usePriceCalculation";
import { useAppSelector, useAppDispatch } from "@hooks/redux";
import { selectCartItemById, selectRemovedProducts, removeItemFromCart, updateItemQuantity, addItemToCart } from "@store/userSlice";

interface CartItemProps {
    content: IProduct;
    stock: number;
}

export const CartsItem: React.FC<CartItemProps> = ({ content, stock }) => {
    const dispatch = useAppDispatch();
    const { finalPrice } = usePriceCalculation(content.price, content.discountPercentage);
    const cartItem = useAppSelector((state) => selectCartItemById(state, content.id));
    const removedProducts = useAppSelector(selectRemovedProducts);
    const isDeleted = removedProducts.some((item) => item.id === content.id);
    const quantityInRedux = cartItem ? cartItem.quantity : 0;
    const [quantity, setQuantity] = useState(quantityInRedux);

    useEffect(() => {
        if (quantity !== quantityInRedux) {
            setQuantity(quantityInRedux);
        }
    }, [quantityInRedux]);


    const handleReAddToCart = () => {
        if (quantity === 0) {
            dispatch(addItemToCart(content));
            setQuantity(1);
        }
    };

    const handleRemove = () => {
        dispatch(removeItemFromCart(content.id));
    };

    const handleUpdateQuantityInCart = (newQuantity: number) => {
        if (newQuantity > stock) return;

        if (newQuantity > 0) {
            dispatch(updateItemQuantity({ id: content.id, quantity: newQuantity }));
            setQuantity(newQuantity);
        } else {
            dispatch(removeItemFromCart(content.id));
            setQuantity(0);
        }
    };

    return (
        <div className={styles.cart__form_item}>
            <Link
                to={`/product/${content.id}`}
                className={cn(styles.cart__form_left, {
                    [styles.cart__form_left_deleted]: isDeleted,
                })}
            >
                <img src={content.thumbnail} alt={content.title} className={styles.cart__form_img} />
                <div className={styles.cart__form_about}>
                    <div className={styles.cart__form_about_title}>{content.title}</div>
                    <div className={styles.cart__form_about_price}>${finalPrice}</div>
                </div>
            </Link>

            {!isDeleted ? (
                <div className={styles.cart__form_right}>
                    <CountBtn
                        quantity={quantity}
                        maxQuantity={stock}
                        onIncrease={() => handleUpdateQuantityInCart(quantity + 1)}
                        onDecrease={() => handleUpdateQuantityInCart(quantity - 1)}
                    />
                    <button className={styles.cart__form_delete} onClick={handleRemove}>
                        Delete
                    </button>
                </div>
            ) : (
                <RedButton
                    imageSrc={basket}
                    size="small"
                    onClick={handleReAddToCart}
                    disabled={stock === 0}
                />
            )}
        </div>
    );
};
