import { Input } from "@ui-kit/input";
import styles from "./Auth.module.scss";
import { RedButton } from "@ui-kit/red-button";
import { useCallback, useEffect, useState } from "react";
import { useLoginUserMutation } from "@api/authApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks/redux";
import { fetchUserCart, setUserId } from "@store/userSlice";

export const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (isLoading) return;

        if (token) {
            navigate("/");
        }
    }, [isLoading, navigate]);

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            if (isLoading) return;

            try {
                const userData = await loginUser({
                    username,
                    password,
                    expiresInMins: 10,
                }).unwrap();

                localStorage.setItem("token", userData.accessToken);
                dispatch(setUserId(userData.id));
                await dispatch(fetchUserCart()).unwrap(); 

                setTimeout(() => {
                    navigate("/");
                }, 100);
            } catch (err) {
                const errorMessage = err instanceof Error
                    ? err.message
                    : "Invalid credentials. Please try again.";
                alert(errorMessage);
            }
        },
        [loginUser, username, password, dispatch, navigate]
    );

    return (
        <div className="container">
            <div className={styles.auth}>
                <h2 className="title">Sign in</h2>
                <form className={styles.auth__form} onSubmit={handleSubmit}>
                    <div className={styles.auth__inputs}>
                        <Input
                            type="text"
                            placeholder="Login"
                            aria-label="Login"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder="Password"
                            aria-label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.auth__button}>
                        <RedButton
                            text={isLoading ? "Loading..." : "Sign in"}
                            size="big"
                            disabled={isLoading || !username || !password}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
