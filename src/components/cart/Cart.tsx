import { Carts } from "@components/carts"
import { Total } from "@components/total"
import styles from './Cart.module.scss'

export const Cart = () => {
    return (
        <div className={styles.cart}>
            <div className="container">
                <h1 className='title'>My cart</h1>
                <div className={styles.cart__container}>
                    <Carts />
                    <Total />
                </div>
            </div>
        </div>
    )
}