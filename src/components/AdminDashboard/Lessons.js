import React from "react";
import Sidebar from "./Sidebar";

const Lessons = () => {
    const lessons = [
        { id: 1, category: "Category 1", name: "Lesson 1" },
        { id: 2, category: "Category 2", name: "Lesson 2" },
        { id: 3, category: "Category 3", name: "Lesson 3" },
    ];

    return (
        <div className="bg-white text-gray-900">
            {/* Sidebar */}
            <Sidebar />

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
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="border border-gray-300 p-3">
                                    SN
                                </th>
                                <th className="border border-gray-300 p-3">
                                    Category
                                </th>
                                <th className="border border-gray-300 p-3">
                                    Lesson Name
                                </th>
                                <th className="border border-gray-300 p-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.map((lesson, index) => (
                                <tr className="border-t" key={lesson.id}>
                                    <td className="border border-gray-300 p-3">
                                        {index + 1}
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        {lesson.category}
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        {lesson.name}
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 mr-2">
                                            Edit
                                        </button>
                                        <button className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
