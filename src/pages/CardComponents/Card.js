import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, image, description }) => {
    const navTakeLesson = useNavigate();
    const handleTakeLesson = () => {
        navTakeLesson("/lesson");
    };
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 h-[20rem] flex flex-col justify-between">
            <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <img
                    // src={image}
                    src="/icon/logo.png"
                    alt={title}
                    className="mx-auto mb-3 h-[12rem] object-contain"
                />
            </div>
            <div className="flex justify-end">
                <button
                    className="text-blue-500 font-medium hover:text-blue-700 text-xl"
                    onClick={handleTakeLesson}
                >
                    Take Lesson
                    <span className="ml-2">→</span>
                </button>
            </div>
        </div>
    );
};

export default Card;
