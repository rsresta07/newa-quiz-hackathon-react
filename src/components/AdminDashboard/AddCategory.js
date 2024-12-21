import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Assuming Sidebar is a separate component

const AddCategory = () => {
    // State to manage the category name
    const [categoryName, setCategoryName] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle adding the category
        console.log("New Category Added: ", categoryName);
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
