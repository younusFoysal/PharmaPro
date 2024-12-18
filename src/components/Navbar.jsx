"use client"
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Cart from "@/components/Cart";


const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div>
            <div className="grid xl:grid-cols-1 grid-cols-1">
                <div className="p-5">
                    <div className="py-3 px-3 rounded-xl border w-full bg-green-900 sticky top-0 z-50">
                        <div className="flex justify-between items-center">
                        <div className="flex justify-items-center items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                                    />
                                </svg>
                                <p className="font-semibold text-white">PharmaPro</p>
                                <div className="relative">
                                    <input
                                        className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                                        placeholder="Search for Grocery, Stores, Vegetable, or Meat"
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-items-center items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5 text-yellow-300 hidden lg:block md:block"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <p className="text-sm text-white hidden lg:block md:block">
                                    Order now and get it within{" "}
                                    <span className="text-yellow-300">15 min!</span>
                                </p>
                                <button
                                    className="rounded-full text-white border border-white p-1.5 hover:bg-white hover:text-green-800"
                                    onClick={() => setIsCartOpen(true)}
                                >
                                    <IoCartOutline className="text-xl" />
                                </button>
                                <img
                                    className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isCartOpen && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-4xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Your Cart</h2>
                            <button
                                className="btn btn-sm btn-circle"
                                onClick={() => setIsCartOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <Cart />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
