import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
            <section className="flex justify-between items-center m-4">
                <h1 className="text-xl font-semibold">Newa Quiz</h1>
                <div>
                    <a href="./index.html" className="px-2">
                        Home
                    </a>
                    <a
                        href="./components/modules/Contact.html"
                        className="px-2"
                    >
                        Contact
                    </a>
                    <a
                        href="./components/modules/AboutUs.html"
                        className="px-2"
                    >
                        About
                    </a>
                    <a href="./components/modules/Login.html" className="px-2">
                        Login
                    </a>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
