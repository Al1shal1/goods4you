import { Input } from "@ui-kit/input";
import styles from "./Auth.module.scss";
import { RedButton } from "@ui-kit/red-button";

export const Auth = () => {
    return (
        <div className="container">
            <div className={styles.auth}>
                <h2 className="title">Sign in</h2>
                <div className={styles.auth__form}>
                    <div className={styles.auth__inputs}>
                        <Input placeholder="Login" />
                        <Input placeholder="Password" />
                    </div>
                    <div className={styles.auth__button}>
                        <RedButton text="Sign in" size="big" />
                    </div>
                </div>
            </div>
        </div>
    );
}