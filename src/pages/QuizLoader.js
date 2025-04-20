import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importing useNavigate for redirection
import { db } from "../firebase/firebase-config";
import { get, ref } from "firebase/database";
import Modal from "react-modal"; // Importing Modal

const QuizLoader = () => {
    const { lessonId } = useParams(); // lessonId corresponds to keys like "general_greetings"
    const navigate = useNavigate(); // Hook for redirection
    const [quizzes, setQuizzes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userAnswers, setUserAnswers] = useState({}); // Store user answers
    const [result, setResult] = useState(null); // Store the result after submission
    const [isModalOpen, setIsModalOpen] = useState(false); // For modal control
    const [detailedResults, setDetailedResults] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const quizzesRef = ref(
                    db,
                    `categories/greetings/lessons/${lessonId}/quizzes`
                );
                const snapshot = await get(quizzesRef);

                if (snapshot.exists()) {
                    setQuizzes(snapshot.val());
                } else {
                    console.error("No quizzes found for this lesson!");
                    setQuizzes({});
                }
            } catch (error) {
                console.error("Error fetching quizzes:", error);
                setQuizzes({});
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, [lessonId]);

    const handleAnswerChange = (quizId, answer) => {
        setUserAnswers((prevAnswers) => ({
            ...prevAnswers,
            [quizId]: answer,
        }));
    };

    const handleSubmit = () => {
        let score = 0;
        let total = 0;
        const details = [];

        Object.entries(quizzes).forEach(([quizId, quiz]) => {
            total++;
            const userAnswer = userAnswers[quizId];
            const isCorrect = userAnswer === quiz.correctAnswer.toString();

            if (isCorrect) {
                score++;
            }

            details.push({
                question: quiz.question,
                correctAnswer: quiz.options[quiz.correctAnswer],
                userAnswer: quiz.options[userAnswer] || "No answer selected",
                isCorrect,
            });
        });

        setDetailedResults(details);
        setResult({ score, total });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate(`/lesson/${lessonId}`); // Redirect to lesson page after closing the modal
    };

    const handleTryAgain = () => {
        setUserAnswers({}); // Reset the selected answers
        setResult(null); // Reset the result
        setIsModalOpen(false); // Close the modal
        // Reopen the modal to start again
        // setTimeout(() => setIsModalOpen(true), 200); // Delay to ensure modal closes before reopening
    };

    if (loading) {
        return <div className="text-center mt-10">Loading quizzes...</div>;
    }

    if (!quizzes || Object.keys(quizzes).length === 0) {
        return <div className="text-center mt-10">No quizzes available.</div>;
    }

    return (
        <div className="font-sans p-5 mt-28">
            <h1 className="text-center text-2xl font-bold mb-5">Take a Quiz</h1>

            <div className="w-full h-auto max-w-6xl border border-gray-300 p-5 rounded-lg mx-auto">
                {Object.entries(quizzes).map(([quizId, quiz], index) => (
                    <div className="mb-6" key={quizId}>
                        <h2 className="text-xl font-semibold mb-4 text-left">
                            {index + 1}. {quiz.question}
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {quiz.options &&
                                Object.entries(quiz.options).map(
                                    ([optionKey, optionValue]) => (
                                        <label
                                            key={optionKey}
                                            className="flex items-center text-lg"
                                        >
                                            <input
                                                type="radio"
                                                name={`quiz${quizId}`}
                                                value={optionKey}
                                                checked={
                                                    userAnswers[quizId] ===
                                                    optionKey
                                                } // Bind the radio button with the answer state
                                                onChange={() =>
                                                    handleAnswerChange(
                                                        quizId,
                                                        optionKey
                                                    )
                                                }
                                                className="mr-2"
                                            />
                                            {optionValue}
                                        </label>
                                    )
                                )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="my-6 text-center">
                <button
                    className="bg-green-600 text-white px-4 py-2 text-2xl rounded hover:bg-green-800"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>

            {/* Modal for result */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)} // Close the modal when clicked outside
                contentLabel="Quiz Result"
                className="mt-14 bg-white p-6 rounded-lg shadow-lg"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50" // Semi-transparent dark background
            >
                <div className="text-center">
                    {result && (
                        <>
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                Your Score: {result.score}/{result.total}
                            </h2>
                            <p className="text-md text-gray-600 mb-4">
                                {((result.score / result.total) * 100).toFixed(
                                    2
                                )}
                                % Correct
                            </p>

                            {/* Detailed results */}
                            <div className="text-left px-36">
                                {detailedResults.map((detail, index) => (
                                    <div
                                        key={index}
                                        className="mb-4 border-b pb-2"
                                    >
                                        <h3 className="text-lg font-semibold pt-2">
                                            {index + 1}. {detail.question}
                                        </h3>
                                        <p
                                            className={`text-md pt-2 ${detail.isCorrect
                                                ? "text-green-600"
                                                : "text-red-600"
                                                }`}
                                        >
                                            Your Answer: {detail.userAnswer}
                                        </p>
                                        <p className="text-md text-gray-600 pt-2">
                                            Correct Answer:{" "}
                                            {detail.correctAnswer}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center space-x-4 mt-6">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={handleTryAgain}
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                                >
                                    Try Again
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default QuizLoader;
