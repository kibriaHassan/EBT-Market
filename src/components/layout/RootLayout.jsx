import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const RootLayout = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className=" bg-gray-950 text-gray-100 flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
