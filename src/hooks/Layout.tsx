import { Footer } from "@ui-kit/footer";
import { Header } from "@ui-kit/header";
import { useAuth } from "../providers/AuthProvider";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();
    
    if (isLoading) {
        return <div className="loader_wrapper"><div className="loader"></div></div>;
    }
    
    useEffect(() => {
        if (!user) {
            navigate("/login", { replace: true });
        }
    }, [user, navigate]);
    

    return (
        <div className="wrapper">
            <div className="wrapper__header">
                <Header user={user}/>
            </div>
            <main className="wrapper__container">
                <Outlet />
            </main>
            <div className="wrapper__footer">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;