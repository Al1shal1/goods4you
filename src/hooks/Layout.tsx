import { Footer } from "@ui-kit/footer";
import { Headers } from "@ui-kit/header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__header">
                <Headers />
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