import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== repassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Sign up successful!");
            navigate("/login");
        } catch (error) {
            console.error("Error signing up:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="bg-white rounded-lg py-5">
            <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
                <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center w-full lg:p-12">
                        <div className="flex items-center xl:p-10">
                            <form
                                className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                                onSubmit={handleSignUp}
                            >
                                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                                    Sign Up
                                </h3>
                                <p className="mb-4 text-grey-700">
                                    Enter your email and password
                                </p>

                                <label
                                    htmlFor="email"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Email*
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="mail@loopple.com"
                                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />

                                <label
                                    htmlFor="password"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Password*
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter a password"
                                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />

                                <label
                                    htmlFor="confirm-password"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Confirm Password*
                                </label>
                                <input
                                    id="confirm-password"
                                    type="password"
                                    value={repassword}
                                    onChange={(e) =>
                                        setRepassword(e.target.value)
                                    }
                                    placeholder="Enter the password again"
                                    className="flex items-center w-full px-5 py-4 mb-7 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />

                                <button
                                    type="submit"
                                    className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-red-500 focus:ring-4 focus:ring-purple-blue-100 bg-black"
                                >
                                    Sign Up
                                </button>

                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                    <p className="mx-4 text-grey-600">or</p>
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                </div>

                                <button
                                    type="button"
                                    className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300"
                                >
                                    <img
                                        className="h-5 mr-2"
                                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                                        alt="Google Logo"
                                    />
                                    Sign in with Google
                                </button>

                                <Link
                                    to="/login"
                                    className="text-sm font-medium text-blue-500 hover:underline"
                                >
                                    Already have an account? Log In
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
