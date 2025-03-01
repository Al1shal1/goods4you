import { Link } from "react-router-dom";
import styles from "./CartsItem.module.scss";
import cn from "classnames";
import basket from "@icons/basket.svg";
import { CountBtn } from "@ui-kit/count-btn";
import { RedButton } from "@ui-kit/red-button";
import { IProduct } from "@models/IProduct";
import { usePriceCalculation } from "@hooks/usePriceCalculation";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { removeItemFromCart, addItemToCart, selectCartItemById, selectRemovedProducts, updateItemQuantity } from "@store/userSlice";

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
    const quantityInCart = cartItem ? cartItem.quantity : 0;

    const handleUpdateQuantity = (newQuantity: number) => {
        if (newQuantity > 0) {
            dispatch(updateItemQuantity({ id: content.id, quantity: newQuantity }));
        } else {
            dispatch(removeItemFromCart(content.id));
        }
    };

    const handleReAddToCart = () => {
        dispatch(addItemToCart(content));
    };

    const handleRemove = () => {
        dispatch(removeItemFromCart(content.id));
    };

    return (
        <div className={styles.cart__form_item}>
            <Link to={`/product/${content.id}`}
                className={cn(styles.cart__form_left, {
                    [styles.cart__form_left_deleted]: isDeleted,
                })}
            >
                <img
                    src={content.thumbnail}
                    alt="thumbnail"
                    className={styles.cart__form_img}
                />
                <div className={styles.cart__form_about}>
                    <div className={styles.cart__form_about_title}>{content.title}</div>
                    <div className={styles.cart__form_about_price}>${finalPrice}</div>
                </div>
            </Link>

            {!isDeleted ? ( 
                <div className={styles.cart__form_right}>
                    <CountBtn
                        quantity={quantityInCart}
                        maxQuantity={stock}
                        onIncrease={() => handleUpdateQuantity(quantityInCart + 1)}
                        onDecrease={() => handleUpdateQuantity(quantityInCart - 1)}
                    />
                    <button className={styles.cart__form_delete} onClick={handleRemove}>
                        Delete
                    </button>
                </div>
            ) : (
                <button onClick={handleReAddToCart}>
                    <RedButton imageSrc={basket} size="small" />
                </button>
            )}
        </div>
    );
};
