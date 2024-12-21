import React from "react";
import Sidebar from "./Sidebar";

const Categories = () => {
    return (
        <div className="bg-white text-gray-900">
            <Sidebar />

            {/* Main Content */}
            <div className="main-content ml-64 p-8">
                <h1 className="text-center text-3xl font-semibold mb-6">
                    Category Management
                </h1>

                {/* Button to Add Lesson */}
                <div className="text-right mb-4">
                    <a
                        href="/add-lesson"
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                    >
                        Add New Lesson
                    </a>
                </div>

                {/* Lesson List */}
                <div className="lesson-list">
                    <h3 className="text-2xl font-semibold mb-4">Lesson</h3>
                    <table className="table-auto w-full bg-white border rounded-lg shadow">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="p-3">SN</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Lesson</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="p-3">1</td>
                                <td className="p-3">Category 1</td>
                                <td className="p-3">Lesson 1</td>
                                <td className="p-3">
                                    <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 mr-2">
                                        Edit
                                    </button>
                                    <button className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3">2</td>
                                <td className="p-3">Category 2</td>
                                <td className="p-3">Lesson 2</td>
                                <td className="p-3">
                                    <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 mr-2">
                                        Edit
                                    </button>
                                    <button className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3">3</td>
                                <td className="p-3">Category 3</td>
                                <td className="p-3">Lesson 3</td>
                                <td className="p-3">
                                    <button className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 mr-2">
                                        Edit
                                    </button>
                                    <button className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Categories;
