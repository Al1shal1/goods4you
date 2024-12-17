import { Link } from "react-router-dom"
import { RedButton } from "../RedButton/RedButton"
import styles from './catalog.module.scss'
import boots from '../../icons/boots.png'
import basket from '../../icons/basket.svg';
import { useScrollToHash } from "src/hooks/useScrollToHash";

export const Catalog = () => {
    useScrollToHash()

    return (
        <main id="catalog" className={styles.catalog}>
            <div className="container">
                <h2 className={styles.catalog__title}>Catalog</h2>
                <input type="text" placeholder="Search by title" className={styles.catalog__search} />
                <ul className={styles.catalog__list}>
                    <li id="1">
                        <Link to='/product/1' className={styles.catalog__link}>
                            <img src={boots} alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc={basket} padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li id="2">
                        <Link to='/product/2' className={styles.catalog__link}>
                            <img src={boots} alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc={basket} padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li id="3">
                        <Link to='/product/3' className={styles.catalog__link}>
                            <img src={boots} alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc={basket} padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li id="4" >
                        <Link to='/product/4' className={styles.catalog__link}>
                            <img src={boots} alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc={basket} padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li id="5">
                        <Link to='/product/5' className={styles.catalog__link}>
                            <img src={boots} alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc={basket} padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li id="6">
                        <Link to='/product/6' className={styles.catalog__link}>
                            <img src={boots} alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc={basket} padding="16px"/>
                            </div>
                        </div>
                    </li>
                    <li id="6">
                        <Link to='/product/6' className={styles.catalog__link}>
                            <img src={boots} alt="boots" className={styles.catalog__image} />
                            <div className={styles.catalog__image_text}>Show details</div>
                            <div className={styles.catalog__image_overlay}></div>
                        </Link>
                        <div className={styles.catalog__content}>
                            <div >
                                <h5 className={styles.catalog__name}>Essence Mascara Lash Princess</h5>
                                <div className={styles.catalog__price}>$110</div>
                            </div>
                            <div className={styles.catalog__basket_btn}>
                                <RedButton imageSrc={basket} padding="16px"/>
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