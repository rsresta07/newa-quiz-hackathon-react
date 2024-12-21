import React from "react";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
    return (
        <div className="bg-white text-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content ml-64 p-6 h-screen overflow-y-auto">
                {/* Dashboard Header */}
                <div className="logo-container text-center mb-8">
                    <img
                        src=""
                        alt="Newa Quiz Admin Logo"
                        className="max-w-full h-auto w-72 mx-auto"
                    />
                </div>

                {/* Recent Lists for Categories, Lessons, Facts, and Quizzes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Category List */}
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-4">
                            Recent Categories
                        </h3>
                        <ul className="space-y-2">
                            <li className="bg-gray-100 p-4 rounded">
                                Category 1
                            </li>
                            <li className="bg-gray-100 p-4 rounded">
                                Category 2
                            </li>
                            <li className="bg-gray-100 p-4 rounded">
                                Category 3
                            </li>
                        </ul>
                    </div>

                    {/* Lesson List */}
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-4">
                            Recent Lessons
                        </h3>
                        <ul className="space-y-2">
                            <li className="bg-gray-100 p-4 rounded">
                                Lesson 1
                            </li>
                            <li className="bg-gray-100 p-4 rounded">
                                Lesson 2
                            </li>
                            <li className="bg-gray-100 p-4 rounded">
                                Lesson 3
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Second Row with Facts and Quizzes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Facts List */}
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-4">
                            Recent Facts
                        </h3>
                        <ul className="space-y-2">
                            <li className="bg-gray-100 p-4 rounded">Fact 1</li>
                            <li className="bg-gray-100 p-4 rounded">Fact 2</li>
                            <li className="bg-gray-100 p-4 rounded">Fact 3</li>
                        </ul>
                    </div>

                    {/* Quiz List */}
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-4">
                            Recent Quizzes
                        </h3>
                        <ul className="space-y-2">
                            <li className="bg-gray-100 p-4 rounded">Quiz 1</li>
                            <li className="bg-gray-100 p-4 rounded">Quiz 2</li>
                            <li className="bg-gray-100 p-4 rounded">Quiz 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
