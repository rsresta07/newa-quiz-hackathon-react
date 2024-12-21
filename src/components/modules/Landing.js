import React from "react";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Landing Page */}
            <main className="flex-grow mt-32">
                <h1 className="text-4xl font-bold flex justify-center">
                    Welcome to Newa Quiz
                </h1>
                <h2 className="text-2xl font-semibold flex justify-center my-12">
                    Categories
                </h2>
                <section className="grid grid-cols-3 gap-4 place-items-center text-center">
                    <a href="">
                        <div>
                            <h3>Greeting</h3>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <h3>Foods</h3>
                        </div>
                    </a>
                    <a href="">
                        <div>
                            <h3>Dress</h3>
                        </div>
                    </a>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
