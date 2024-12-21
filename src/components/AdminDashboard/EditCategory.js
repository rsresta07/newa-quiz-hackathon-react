import React, { useState } from "react";
import Sidebar from "./Sidebar";

const EditCategory = () => {
    // State to manage the category data
    const [categoryName, setCategoryName] = useState("Category 1");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle category update
        console.log("Category Updated: ", categoryName);
    };

    return (
        <div className="bg-white text-gray-900">
            <Sidebar />

            {/* Main Content */}
            <div className="main-content ml-64 p-8">
                <h1 className="text-center text-3xl font-semibold mb-6">
                    Edit Category
                </h1>

                {/* Edit Category Form */}
                <form onSubmit={handleSubmit}>
                    {/* Category ID (hidden for editing purposes) */}
                    <input type="hidden" name="categoryId" value="1" />

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

                    {/* <div className="mb-4">
                        <label htmlFor="categoryDescription" className="block text-lg font-medium">Category Description</label>
                        <textarea
                            id="categoryDescription"
                            name="categoryDescription"
                            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                            rows="4"
                            defaultValue="Old description of Category 1"
                            required
                        />
                    </div> */}

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditCategory;
