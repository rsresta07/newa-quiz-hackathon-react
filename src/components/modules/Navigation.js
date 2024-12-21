import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10 h-[75px]">
            <section className="flex justify-between items-center m-4 px-4">
                <div class="flex flex-row items-center gap-6">
                    <img src="/icon/logo.png" class="h-[3rem]" />
                    {/* <h1 className="text-3xl font-semibold">Newa Quiz</h1> */}
                </div>
                <div>
                    <a href="/" className="px-2 text-xl">
                        Home
                    </a>
                    <a href="/contact" className="px-2 text-xl">
                        Contact
                    </a>
                    <a href="/about-us" className="px-2 text-xl">
                        About
                    </a>
                    {/* <button onClick={handleLogin()} className="px-2 text-xl">
                        Login
                    </button> */}
                    <a href="/login" className="px-2 text-xl">
                        Login
                    </a>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
