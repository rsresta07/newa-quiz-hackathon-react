import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import { get, ref } from "firebase/database";

const Lessons = () => {
    const navigate = useNavigate();
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const lessonsRef = ref(db, "categories/greetings/lessons");
                const snapshot = await get(lessonsRef);
                if (snapshot.exists()) {
                    const lessonsData = snapshot.val();
                    const lessonsArray = Object.entries(lessonsData).map(
                        ([key, value]) => ({
                            id: key,
                            title: value.title,
                        })
                    );
                    setLessons(lessonsArray);
                } else {
                    console.error("No lessons found!");
                }
            } catch (error) {
                console.error("Error fetching lessons:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLessons();
    }, []);

    const handleLessonClick = (lessonId) => {
        navigate(`/lesson/${lessonId}`);
    };

    if (loading) {
        return <div className="text-center mt-10">Loading lessons...</div>;
    }

    if (!lessons.length) {
        return <div className="text-center mt-10">No lessons available.</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-gray-300 p-8 rounded-lg w-[500px]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-6">Lessons</h2>
                    <ul className="space-y-4 items-center">
                        {lessons.map((lesson) => (
                            <li key={lesson.id}>
                                <button
                                    onClick={() => handleLessonClick(lesson.id)}
                                    className="block text-lg font-medium text-black bg-white py-3 px-4 rounded-md hover:bg-gray-600 hover:text-white transition duration-300 text-center w-48 h-14"
                                >
                                    {lesson.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
