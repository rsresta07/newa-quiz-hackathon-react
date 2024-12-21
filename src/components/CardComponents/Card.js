import React from "react";

const Card = ({ title, image, description }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="text-center">
                <img
                    src={image}
                    alt={title}
                    className="w-24 h-24 mx-auto mb-3"
                />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <button className="flex items-center justify-center text-blue-500 font-medium hover:text-blue-700">
                    Take Lesson
                    <span className="ml-2">→</span>
                </button>
            </div>
        </div>
    );
};

export default Card;
