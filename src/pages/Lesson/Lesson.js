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
        return (
            <div className="text-center mt-10 text-gray-700">
                Loading lessons...
            </div>
        );
    }

    if (!lessons.length) {
        return (
            <div className="text-center mt-10 text-gray-700">
                No lessons available.
            </div>
        );
    }

    return (
        <div className=" min-h-screen flex bg-gray-100 pt-32 justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-[40rem] h-[auto] ">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Lessons
                    </h2>
                    <ul className="space-y-4">
                        {lessons.map((lesson) => (
                            <li key={lesson.id}>
                                <button
                                    onClick={() => handleLessonClick(lesson.id)}
                                    className="block text-lg text-white bg-green-600 hover:bg-green-800 py-4 px-6 rounded-md w-full"
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
