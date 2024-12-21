import styles from './CountBtn.module.scss'
import minus from '../../icons/minus.svg'
import plus from '../../icons/plus.svg'
import { useState } from 'react'


interface CountBtnProps {
    onResetToCart: () => void;
}

export const CountBtn:React.FC<CountBtnProps> = ( { onResetToCart } ) => { 
    const [quantity, setQuanity] = useState(1)

    const increaseQuantity = () => {
        setQuanity((prevQuantity) => prevQuantity + 1)
    }

    const decraeaseQuantity = () => {
        setQuanity((prevQuantity) => {
            const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 0;
            if( newQuantity === 0) {
                onResetToCart()
            }
            return newQuantity;
        })
    }

    return (
        <div className={styles.controls}>
            <div className={styles.controls__left} onClick={decraeaseQuantity}>
                <button className={styles.controls_btn} >
                    <img src={minus} alt="minus" />
                </button>
            </div>
            <div className={styles.controls__items}>{quantity} item</div>
            <div className={styles.controls__right} onClick={increaseQuantity}>
                <button className={styles.controls_btn} >
                    <img src={plus} alt="plus" />
                </button>
            </div>
        </div>
    )
}