import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../../firebase/firebase-config"; // Adjust the path based on your setup
import Sidebar from "./Sidebar"; // Assuming Sidebar is a separate component

const AddCategory = () => {
    // State to manage the category name
    const [categoryName, setCategoryName] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (categoryName.trim() === "") {
            alert("Category name cannot be empty!");
            return;
        }

        try {
            // Add the new category to Firebase Realtime Database
            const categoriesRef = ref(db, "categories");
            const newCategoryRef = push(categoriesRef);
            await newCategoryRef.set({
                name: categoryName,
                lessons: {}, // Initialize with an empty lessons object
            });

            alert("Category added successfully!");
            setCategoryName(""); // Clear the input field
        } catch (error) {
            console.error("Error adding category:", error);
            alert("Failed to add category. Please try again.");
        }
    };

    return (
        <div className="bg-white text-gray-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content ml-64 p-8">
                <h1 className="text-center text-3xl font-semibold mb-6">
                    Add New Category
                </h1>

                {/* Form to Add Category */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="categoryName"
                            className="block text-lg font-medium"
                        >
                            Category Name
                        </label>
                        <input
                            type="text"
                            id="categoryName"
                            name="categoryName"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                    >
                        Add Category
                    </button>
                </form>
            </div>

            {/* Footer */}
            <div className="footer fixed bottom-0 w-full bg-white text-black text-center py-4">
                <p className="text-sm">
                    &copy; 2024 Newa Quiz. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default AddCategory;
