import { Input } from "@ui-kit/input";
import styles from "./Auth.module.scss";
import { RedButton } from "@ui-kit/red-button";
import { useState, useEffect } from "react";
import { useLoginUserMutation } from "@api/authApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@hooks/redux";
import { fetchUserCart, setUserId } from "@store/userSlice";

export const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser, { isLoading, isSuccess, data }] = useLoginUserMutation();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isLoading) return;

        try {
            const userData = await loginUser({
                username,
                password,
                expiresInMins: 10,
            }).unwrap();

            localStorage.setItem("token", userData.accessToken);
            localStorage.setItem("userId", String(userData.id));

            dispatch(setUserId(userData.id));
            dispatch(fetchUserCart());

            console.log("Login successful:", userData);
        } catch (err) {
            alert("Invalid credentials. Please try again.");
            console.error("Login failed:", err);
        }
    };

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setUserId(data.id));
            navigate("/"); // Переход после авторизации
        }
    }, [isSuccess, navigate, data, dispatch]);

    return (
        <div className="container">
            <div className={styles.auth}>
                <h2 className="title">Sign in</h2>
                <form className={styles.auth__form} onSubmit={handleSubmit}>
                    <div className={styles.auth__inputs}>
                        <Input
                            type="text"
                            placeholder="Login"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.auth__button}>
                        <RedButton
                            text={isLoading ? "Loading..." : "Sign in"}
                            size="big"
                            disabled={isLoading}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
