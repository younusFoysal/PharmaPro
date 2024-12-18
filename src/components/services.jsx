import React from 'react';

const Services = () => {
    return (
        <div>

            <div
                className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-10">

                <div className=" w-full mx-auto text-center">

                    <h2 className="mb-1 text-4xl font-extrabold leading-tight text-gray-900">Our Services</h2>
                    <p className="mb-12 text-lg text-green-700">Here is a few of the awesome Services we provide.</p>

                </div>


                <div className="w-full">
                    <div className="flex flex-col w-full mb-10 sm:flex-row">

                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-600  rounded-lg "></span>
                                <div className=" group relative h-full p-5 bg-white border-2 border-green-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">Medicine Delivery to Your Doorstep</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase"> </p>
                                    <p className="mb-2 text-gray-600">We bring your medicines to your doorstep with fast and reliable delivery. Simply place your order online, and we’ll handle the rest.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-600 rounded-lg"></span>
                                <div className="group relative h-full p-5 bg-white border-2 border-green-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">Prescription Upload</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-green-600  uppercase"> </p>
                                    <p className="mb-2 text-gray-600">Upload your doctor’s prescription securely, and we’ll help you find and deliver the medicines you need.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col w-full mb-5 sm:flex-row">
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-600  rounded-lg"></span>
                                <div className="group relative h-full p-5 bg-white border-2 border-green-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">Online Consultation</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">  </p>
                                    <p className="mb-2 text-gray-600">Connect with certified pharmacists or healthcare professionals for advice and guidance on your medication.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className=" relative h-full ml-0 mr-0 sm:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-600  rounded-lg"></span>
                                <div className="group relative h-full p-5 bg-white border-2 group-hover border-green-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">Health and Wellness Products</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">  </p>
                                    <p className="mb-2 text-gray-600">Explore a wide range of health and wellness products, including vitamins, supplements, personal care items, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span
                                    className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-600  rounded-lg"></span>
                                <div className="group relative h-full p-5 bg-white border-2 border-green-600 hover:scale-105 duration-500 transition rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 group-hover:text-xl duration-500">24/7 Customer Support</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">  </p>
                                    <p className="mb-2 text-gray-600">Have a question or concern? Our friendly customer support team is available around the clock to assist you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;