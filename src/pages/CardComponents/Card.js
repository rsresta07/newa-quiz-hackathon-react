import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, image, description }) => {
    const navTakeLesson = useNavigate();
    const handleTakeLesson = () => {
        navTakeLesson("/lesson");
    };
    return (
        <div className="bg-green-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 h-[20rem] flex flex-col justify-between">
            <div className="text-center">
                <h3 className="text-4xl font-semibold mb-2 text-white">
                    {title}
                </h3>
                <img
                    // src={image}
                    src="/icon/icons.png"
                    alt={title}
                    className="mx-auto mb-3 h-[12rem] object-contain"
                />
            </div>
            <div className="flex justify-end">
                <button
                    className="text-white font-medium hover:text-gray-700 text-xl"
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
