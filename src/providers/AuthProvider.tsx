import { createContext, useContext, useEffect } from "react";
import { useGetCurrentUserQuery } from "@api/authApi";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "@models/ILoginUser";
import { fetchUserCart, setUserId } from "@store/userSlice";
import { useAppDispatch } from "@hooks/redux";

interface AuthContextProps {
    user: LoginUser | null;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { data: user, isLoading, error } = useGetCurrentUserQuery(undefined, { skip: !token });

    const dispatch = useAppDispatch();

    useEffect(() => {
        const isUnauthorized = error && "status" in error && error.status === 401;

        if (!token || isUnauthorized) {
            if (isUnauthorized) {
                alert("Your session has expired. Please log in again.");
            }
            localStorage.removeItem("token");
            localStorage.removeItem("userId");

            if (!user) navigate("/login");
        }
    }, [token, error, user, navigate]);
    

    useEffect(() => {
        if (user) {
            dispatch(setUserId(user.id));
            dispatch(fetchUserCart());
        }
    }, [user, dispatch]);

    return (
        <AuthContext.Provider value={{ user: user ?? null, isLoading }}>
        {!isLoading && children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
