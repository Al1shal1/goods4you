import styles from './FAQ.module.scss'

export const FAQ = () => {
    return (
        <div className={styles.frequently_asked_question}>
            <div className="container">
                <div className={styles.faq__content}>
                    <h2 className={styles.faq__title}>FAQ</h2>
                    <div className={styles.faq__accordion}>
                        <details className={styles.faq__accordion_item} >
                            <summary className={styles.faq__accordion_question}>How can I track the status of my order?</summary>
                            <p className={styles.faq__accordion_answer}>After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.</p>
                        </details>
                        <details className={styles.faq__accordion_item} >
                            <summary className={styles.faq__accordion_question}>What payment methods do you accept?</summary>
                            <p className={styles.faq__accordion_answer}>After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.</p>
                        </details>
                        <details className={styles.faq__accordion_item} >
                            <summary className={styles.faq__accordion_question}>How can I return or exchange an item?</summary>
                            <p className={styles.faq__accordion_answer}>After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.</p>
                        </details>
                    </div>
                </div>

            </div>
        </div>
    )
}
