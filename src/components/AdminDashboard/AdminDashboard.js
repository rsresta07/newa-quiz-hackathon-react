import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase-config";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
    const [categories, setCategories] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [facts] = useState([
        "Fact 1: Newa culture is rich and diverse.",
        "Fact 2: Nepal Bhasa has many dialects.",
        "Fact 3: Traditional Newa greetings have deep meanings.",
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesRef = ref(db, "categories");
                const snapshot = await get(categoriesRef);

                if (snapshot.exists()) {
                    const data = snapshot.val();

                    // Extract categories
                    const allCategories = Object.keys(data).map((key) => ({
                        name: data[key].name,
                    }));
                    setCategories(allCategories.slice(0, 3)); // Limit to 3 categories

                    // Extract lessons
                    const allLessons = [];
                    Object.keys(data).forEach((categoryKey) => {
                        const lessonsObj = data[categoryKey]?.lessons || {};
                        Object.keys(lessonsObj).forEach((lessonKey) => {
                            allLessons.push({
                                title: lessonsObj[lessonKey].title,
                            });
                        });
                    });
                    setLessons(allLessons.slice(0, 3)); // Limit to 3 lessons

                    // Extract quizzes
                    const allQuizzes = [];
                    Object.keys(data).forEach((categoryKey) => {
                        const lessonsObj = data[categoryKey]?.lessons || {};
                        Object.keys(lessonsObj).forEach((lessonKey) => {
                            const quizzesObj =
                                lessonsObj[lessonKey]?.quizzes || {};
                            Object.keys(quizzesObj).forEach((quizKey) => {
                                allQuizzes.push({
                                    question: quizzesObj[quizKey].question,
                                });
                            });
                        });
                    });
                    setQuizzes(allQuizzes.slice(0, 3)); // Limit to 3 quizzes
                } else {
                    console.error("No data available.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white text-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content ml-64 p-6 h-screen overflow-y-auto">
                {/* Dashboard Header */}
                <div className="logo-container text-center mb-8">
                    <img
                        src="/icon/logo.png"
                        alt="Newa Quiz Admin Logo"
                        className="w-[9rem] h-auto w-72 mx-auto"
                    />
                </div>

                {/* Recent Categories, Lessons, Facts, and Quizzes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Category List */}
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-4">
                            Recent Categories
                        </h3>
                        <ul className="space-y-2">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-100 p-4 rounded"
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Lesson List */}
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-4">
                            Recent Lessons
                        </h3>
                        <ul className="space-y-2">
                            {lessons.map((lesson, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-100 p-4 rounded"
                                >
                                    {lesson.title}
                                </li>
                            ))}
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
                            {facts.map((fact, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-100 p-4 rounded"
                                >
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quiz List */}
                    <div>
                        <h3 className="text-center text-2xl font-semibold mb-4">
                            Recent Quizzes
                        </h3>
                        <ul className="space-y-2">
                            {quizzes.map((quiz, index) => (
                                <li
                                    key={index}
                                    className="bg-gray-100 p-4 rounded"
                                >
                                    {quiz.question}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
