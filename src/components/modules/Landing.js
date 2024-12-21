import React from "react";
import Categories from "../../pages/CardComponents/Categories";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col px-12">
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
                <section>
                    <h3 className="bg-gray-200 p-4 h-[200px]">Ads</h3>
                </section>
            </main>
        </div>
    );
};

export default LandingPage;
