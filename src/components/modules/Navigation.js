import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config"; // Import Firebase auth

const Navbar = () => {
    const [user, setUser] = useState(null); // State to track the logged-in user
    const navigate = useNavigate();

    // Check the current user on component mount
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user); // Set user state based on authentication status
        });

        return () => unsubscribe(); // Clean up the subscription on unmount
    }, []);

    const handleLogout = () => {
        auth.signOut(); // Sign the user out when "User" is clicked
        navigate("/login"); // Redirect to login page after logging out
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-red-700 shadow-md z-10 h-[75px]">
            <section className="flex justify-between items-center m-4 px-4">
                <div className="flex flex-row items-center gap-6">
                    <img src="/icon/logo-white.png" className="h-[3rem]" />
                </div>
                <div className="text-white">
                    <a href="/" className="px-2 text-xl">
                        Home
                    </a>
                    <a href="/contact" className="px-2 text-xl">
                        Contact
                    </a>
                    <a href="/about-us" className="px-2 text-xl">
                        About
                    </a>
                    {/* If the user is logged in, show "User". Otherwise, show "Login" */}
                    {user ? (
                        <button onClick={handleLogout} className="px-2 text-xl">
                            User
                        </button>
                    ) : (
                        <a href="/login" className="px-2 text-xl">
                            Login
                        </a>
                    )}
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
