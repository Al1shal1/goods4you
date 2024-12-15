import { Link } from "react-router-dom"
import { RedButton } from "../RedButton/RedButton"
import styles from './catalog.module.scss'

export const Catalog = () => {
    return (
        <main id="catalog" className={styles.catalog}>
            <div className="container">
                <h2 className={styles.catalog__title}>Catalog</h2>
                <input type="text" placeholder="Search by title" className={styles.catalog__search} />
                <ul className={styles.catalog__list}>
                    <li >
                        <Link to='/product' className={styles.catalog__link}>
                            <img src="/src/icons/boots.png" alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc="/src/icons/basket.svg" padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li >
                        <Link to='/product' className={styles.catalog__link}>
                            <img src="/src/icons/boots.png" alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc="/src/icons/basket.svg" padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li >
                        <Link to='/product' className={styles.catalog__link}>
                            <img src="/src/icons/boots.png" alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc="/src/icons/basket.svg" padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li >
                        <Link to='/product' className={styles.catalog__link}>
                            <img src="/src/icons/boots.png" alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc="/src/icons/basket.svg" padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li >
                        <Link to='/product' className={styles.catalog__link}>
                            <img src="/src/icons/boots.png" alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc="/src/icons/basket.svg" padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li >
                        <Link to='/product' className={styles.catalog__link}>
                            <img src="/src/icons/boots.png" alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc="/src/icons/basket.svg" padding="16px"/>
                            </div>
                        </div>
                    </li>
                    
                    
                </ul>
                <div className={styles.catalog__show_btn}>
                    <RedButton text="Show more" />
                </div>
            </div>
        </main>
    )

}