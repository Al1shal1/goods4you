import { RedButton } from '../RedButton/RedButton'
import styles from './CountBtn.module.scss'
import minus from '../../icons/minus.svg'
import plus from '../../icons/plus.svg'


export const CountBtn = () => {
    return (
        <div className={styles.controls}>
            <div className={styles.controls__left}>
                <RedButton padding='16px' imageSrc={minus} />
            </div>
            <div className={styles.controls__items}>1 item</div>
            <div className={styles.controls__right}>
            <RedButton padding='16px' imageSrc={plus} />
            </div>
        </div>
    )
}