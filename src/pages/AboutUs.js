import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-gray-100 text-gray-800 mt-32">
            {/* Container */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Section 1: Title */}
                <div
                    id="about"
                    className="bg-white shadow-md rounded-lg p-6 mb-8 text-center"
                >
                    <h1 className="text-4xl font-bold text-gray-900">
                        About Us
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Discover the vision and mission behind Newa Quiz
                    </p>
                </div>

                {/* Section 2: Content */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        The Newa Quiz web application is a knowledge-based
                        platform dedicated to promoting and preserving the
                        Newari language through engaging quizzes. Addressing the
                        lack of accessible and interactive resources for
                        learning Nepal Bhasa, the app provides an opportunity
                        for both native speakers and learners to enhance their
                        vocabulary and expressions while enjoying an educational
                        experience.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        By fostering cultural awareness and active language use,
                        the Newa Quiz aims to support the preservation of Newari
                        heritage and elevate the language to an international
                        level. With a mission to combine tradition and modern
                        technology, this platform aspires to make language
                        learning enjoyable and impactful for a global audience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
