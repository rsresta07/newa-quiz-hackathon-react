import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar fixed top-0 left-0 w-64 h-screen bg-[#5c0505] text-white py-8 px-4">
            {" "}
            {/* Marron Red color */}
            <div className="logo-container mb-8">
                <img
                    src="/icon/logo-white.png"
                    alt="Newa Quiz Admin Logo"
                    className="w-[5rem] h-auto w-72 mx-auto"
                />
            </div>
            <Link
                to="/admin"
                className="block py-3 px-4 text-xl hover:bg-red-600 rounded"
            >
                Dashboard
            </Link>
            <Link
                to="/admin/categories"
                className="block py-3 px-4 text-xl hover:bg-red-600 rounded"
            >
                Categories
            </Link>
            <Link
                to="/admin/lessons"
                className="block py-3 px-4 text-xl hover:bg-red-600 rounded"
            >
                Lessons
            </Link>
            <Link
                to="/admin/facts"
                className="block py-3 px-4 text-xl hover:bg-red-600 rounded"
            >
                Facts
            </Link>
            <Link
                to="/admin/quizzes"
                className="block py-3 px-4 text-xl hover:bg-red-600 rounded"
            >
                Quizzes
            </Link>
        </div>
    );
};

export default Sidebar;
