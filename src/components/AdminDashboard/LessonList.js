import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase-config"; // Ensure Firebase is set up correctly
import Sidebar from "./Sidebar";

const LessonList = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const categoriesRef = ref(db, "categories");
                const snapshot = await get(categoriesRef);

                if (snapshot.exists()) {
                    const categories = snapshot.val();
                    const lessonsData = [];

                    // Iterate through categories and their lessons
                    for (const categoryKey in categories) {
                        const lessons = categories[categoryKey].lessons || {};
                        for (const lessonKey in lessons) {
                            const lesson = lessons[lessonKey];
                            lessonsData.push({
                                id: lessonKey,
                                name: lesson.title, // Assuming each lesson has a title
                            });
                        }
                    }

                    setLessons(lessonsData);
                } else {
                    console.error("No categories or lessons found.");
                }
            } catch (error) {
                console.error("Error fetching lessons:", error);
            }
        };

        fetchLessons();
    }, []);

    return (
        <div className="bg-white text-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content ml-64 p-8">
                <h1 className="text-center text-3xl font-semibold mb-6">
                    Lesson Management
                </h1>

                {/* Button to Add Lesson */}
                <div className="text-right mb-4">
                    <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                        Add New Lesson
                    </button>
                </div>

                {/* Lesson Table */}
                <div className="bg-white shadow rounded-lg p-4">
                    <table className="table-auto w-full bg-white border rounded-lg shadow">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-3">SN</th>
                                <th className=" p-3">Lesson Name</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.length > 0 ? (
                                lessons.map((lesson, index) => (
                                    <tr className="border-t" key={lesson.id}>
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3">{lesson.name}</td>
                                        <td className="p-3">
                                            <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 mr-2">
                                                Edit
                                            </button>
                                            <button className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="p-3 text-center" colSpan="3">
                                        No lessons found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LessonList;
