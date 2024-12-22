import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase-config";
import Sidebar from "./Sidebar";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesRef = ref(db, "categories");
                const snapshot = await get(categoriesRef);

                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const categoryList = Object.keys(data).map((key) => ({
                        id: key,
                        name: data[key].name,
                    }));
                    setCategories(categoryList);
                } else {
                    console.error("No categories found.");
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="bg-white text-gray-900">
            <Sidebar />

            {/* Main Content */}
            <div className="main-content ml-64 p-8">
                <h1 className="text-center text-3xl font-semibold mb-6">
                    Category Management
                </h1>

                {/* Button to Add Category */}
                <div className="text-right mb-4">
                    <a
                        href="/admin/addCategory"
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                    >
                        Add New Category
                    </a>
                </div>

                {/* Category List */}
                <div className="category-list">
                    {/* <h3 className="text-2xl font-semibold mb-4">Categories</h3> */}
                    <table className="table-auto w-full bg-white border rounded-lg shadow">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-3">SN</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={category.id} className="border-t">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{category.name}</td>
                                    <td className="p-3">
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

export default Categories;
