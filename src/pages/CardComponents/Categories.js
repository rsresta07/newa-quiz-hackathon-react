import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import { get, ref } from "firebase/database";
import Card from "./Card";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesRef = ref(db, "categories");
                const snapshot = await get(categoriesRef);
                if (snapshot.exists()) {
                    const categoriesData = snapshot.val();
                    // Transform categoriesData to an array with additional hierarchy handling
                    const categoriesArray = Object.entries(categoriesData).map(
                        ([key, value]) => ({
                            id: key,
                            name: value.name,
                            lessons: value.lessons,
                        })
                    );
                    setCategories(categoriesArray);
                } else {
                    console.error("No categories data found!");
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!categories.length) {
        return <div>No categories available.</div>;
    }

    return (
        <div className="py-8 px-4">
            <h2 className="text-center text-2xl font-bold mb-6">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
                {categories.map((category) => (
                    <Card
                        key={category.id}
                        title={category.name}
                        lessons={category.lessons}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;
