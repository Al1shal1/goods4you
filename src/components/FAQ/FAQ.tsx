import styles from './FAQ.module.scss'
import { useScrollToHash } from 'src/hooks/useScrollToHash';

export const FAQ = () => {
    useScrollToHash()
    
    return (
        <div id='faq' className={styles.frequently_asked_question}>
            <div className="container">
                <div className={styles.faq__content}>
                    <h2 className={styles.faq__title}>FAQ</h2>
                    <div className={styles.faq__accordion}>
                        <details className={styles.faq__accordion_item} >
                            <summary className={styles.faq__accordion_question}>
                                How can I track the status of my order?
                            </summary>
                        </details>
                        <div className={styles.faq__accordion__content}>
                            <div className={styles.faq__accordion__content_body}>
                                <p className={styles.faq__accordion_answer}>
                                    After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.
                                </p>
                            </div>
                        </div>
                        <details className={styles.faq__accordion_item} >
                            <summary className={styles.faq__accordion_question}>
                                What payment methods do you accept?
                            </summary>
                        </details>
                        <div className={styles.faq__accordion__content}>
                            <div className={styles.faq__accordion__content_body}>
                                <p className={styles.faq__accordion_answer}>
                                    After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.
                                </p>
                            </div>
                        </div>
                        <details className={styles.faq__accordion_item} >
                            <summary className={styles.faq__accordion_question}>
                                How can I return or exchange an item?
                            </summary>
                        </details>
                        <div className={styles.faq__accordion__content}>
                            <div className={styles.faq__accordion__content_body}>
                                <p className={styles.faq__accordion_answer}>
                                    After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
