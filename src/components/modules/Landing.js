import React from "react";
import Categories from "../CardComponents/Categories";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Landing Page */}
            <main className="flex-grow mt-32">
                <h1 className="text-4xl font-bold flex justify-center">
                    Welcome to Newa Quiz
                </h1>
                {/* <h2 className="text-2xl font-semibold flex justify-center my-12">
                    Categories
                </h2> */}
                <section className="">
                    <Categories />
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
