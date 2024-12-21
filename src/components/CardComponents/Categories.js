import React from "react";
import Card from "./Card";

const Categories = () => {
    const cards = [
        {
            title: "Greetings",
            image: "/icon/namaste.png", // Replace with actual path or URL
        },
        {
            title: "Foods",
            image: "/icon/tools-kitchen-3.png", // Replace with actual path or URL
        },
        {
            title: "Dress",
            image: "/icon/woman.png", // Replace with actual path or URL
        },
    ];

    return (
        <div className="py-8 px-4">
            <h2 className="text-center text-2xl font-bold mb-6">Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;
