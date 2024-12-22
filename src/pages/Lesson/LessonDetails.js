import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import { get, ref } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const LessonDetails = () => {
    const { lessonId } = useParams();
    const [lessonContent, setLessonContent] = useState(null);
    const [quizzes, setQuizzes] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        // Check user authentication
        const checkAuth = () => {
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    // Redirect to login if not authenticated
                    navigate("/login");
                }
            });
        };

        checkAuth();

        const fetchLessonDetails = async () => {
            try {
                const lessonRef = ref(
                    db,
                    `categories/greetings/lessons/${lessonId}`
                );
                const snapshot = await get(lessonRef);
                if (snapshot.exists()) {
                    const lessonData = snapshot.val();
                    setLessonContent(lessonData.content || null);
                    setQuizzes(lessonData.quizzes || null);
                } else {
                    console.error("No lesson details found!");
                }
            } catch (error) {
                console.error("Error fetching lesson details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLessonDetails();
    }, [lessonId, auth, navigate]);

    if (loading) {
        return <div>Loading lesson details...</div>;
    }

    if (!lessonContent) {
        return <div>No lesson content available.</div>;
    }

    return (
        <div className="font-sans p-5 mt-28 mb-12 h-[auto]">
            <h1 className="text-center text-4xl font-bold mb-5">
                Lesson Details
            </h1>

            <div className="w-full h-auto max-w-6xl border border-gray-300 p-5 rounded-lg mx-auto">
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-4 px-5 text-left">
                        Content:
                    </h2>
                    <div className="px-5">
                        {Object.entries(lessonContent).map(([key, value]) => (
                            <p key={key} className="mb-2 text-left text-xl">
                                {value}
                            </p>
                        ))}
                    </div>
                </div>
                {quizzes && (
                    <div className="mt-6">
                        {/* <h2 className="text-3xl font-semibold mb-4 text-left px-5">
                            Quizzes:
                        </h2> */}
                        <div className="text-left px-5">
                            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800">
                                <Link to={`/quiz/${lessonId}`}>
                                    <label className="text-lg">Take Quiz</label>
                                </Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LessonDetails;
