import React from 'react';


const Hero = () => {
    return (
        <div>


            <div className="bg-white">


                <section className="bg-[#FCF8F1] bg-opacity-30 py-4 sm:py-2 lg:py-4">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div>
                                <p className="text-base font-semibold tracking-wider text-green-600 uppercase">
                                    A shop for patients
                                </p>
                                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                                    Browse
                                    And Buy your Medicine.</h1>
                                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                                    Get your treatment fast with right doctor.
                                </p>

                                <a href="#" title=""
                                   className="inline-flex items-center px-6 py-4 mt-8 font-semibold hover:scale-105 duration-500 text-white hover:text-black transition-all  bg-green-900 rounded-full lg:mt-16 hover:bg-green-300 shadow-lg focus:bg-yellow-400"
                                   role="button">
                                    Join for free
                                    <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </a>

                                <p className="mt-5 text-gray-600">
                                    Already joined us?
                                    <a href="#" title="" className=" pl-1 text-black transition-all duration-200 hover:underline">
                                        Log in
                                    </a></p>
                            </div>

                            <div>
                                <img className="w-full shadow-lg rounded-xl object-cover hover:scale-105 duration-500 transition"
                                     src="/hero.jpg"
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
};

export default Hero;