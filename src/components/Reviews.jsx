import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Reviews = () => {
    return (
        <div>


            <section className="pb-12 mx-auto md:pb-20 max-w-7xl">
                <div className="py-4 text-center md:py-8">
                    <h4 className="font-bold tracking-wide text-center uppercase text-3xl text-black">Our Reviews</h4>
                    <p className="mt-2 tracking-tight text-green-900 text:xl md:text-xl">We have some good customers.</p>
                </div>

                <div className="gap-8 space-y-8 md:columns-2 lg:columns-3">

                    <div
                        className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-green-200 hover:shadow-lg ">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg"
                                 alt="user avatar" width="400" height="400" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Ravi Kumar</h6>
                                    <p className="text-sm text-gray-500">Car Enthusiast</p>
                                </div>
                                <a href="https://twitter.com/ravikumar/status/1234567890"
                                   className="text-green-500 hover:text-green-600 ml-4">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">The quality of these seat covers is outstanding. They fit perfectly and add
                            a touch of
                            luxury to
                            my car's interior. Highly recommend!</p>
                    </div>

                    <div
                        className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-green-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full"
                                 src="https://randomuser.me/api/portraits/women/14.jpg" alt="user avatar" width="200"
                                 height="200" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Anjali Sharma</h6>
                                    <p className="text-sm text-gray-500">Marketing Professional</p>
                                </div>
                                <a href="https://www.instagram.com/p/1234567890"
                                   className="text-green-500 hover:text-green-600 ml-4">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">I love the customizable designs! I was able to choose the perfect color to
                            match my car's
                            interior. The material feels very durable.</p>
                    </div>

                    <div
                        className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-green-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/18.jpg"
                                 alt="user avatar" width="200" height="200" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Vijay Singh</h6>
                                    <p className="text-sm text-gray-500">Software Developer</p>
                                </div>
                                <a href="https://www.facebook.com/vijaysingh/posts/1234567890"
                                   className="text-green-500 hover:text-green-600 ml-4">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">These seat covers are a game-changer for long drives. The added padding and
                            ergonomic design
                            make
                            a huge difference in comfort.</p>
                    </div>

                    <div
                        className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-green-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full"
                                 src="https://randomuser.me/api/portraits/women/2.jpg" alt="user avatar" width="200"
                                 height="200" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Priya Patel</h6>
                                    <p className="text-sm text-gray-500">Mobile Developer</p>
                                </div>
                                <a href="https://twitter.com/priyapatel/status/1234567890"
                                   className="text-green-500 hover:text-green-600 ml-4">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">The installation was super easy, and the instructions were clear. My car
                            looks and feels
                            much more
                            upscale now.</p>
                    </div>

                    <div
                        className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-green-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/62.jpg"
                                 alt="user avatar" width="200" height="200" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Arjun Mehta</h6>
                                    <p className="text-sm text-gray-500">Manager</p>
                                </div>
                                <a href="https://www.instagram.com/p/1234567890"
                                   className="text-green-500 hover:text-green-600 ml-4">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">Great value for money. The seat covers have a premium feel and have
                            significantly improved
                            the
                            look of my car's interior.</p>
                    </div>

                    <div
                        className="p-8 bg-white border border-gray-100 shadow-2xl aspect-auto rounded-3xl shadow-gray-600/10 hover:shadow-green-200 hover:shadow-lg">
                        <div className="flex gap-4 items-start">
                            <img className="w-12 h-12 rounded-full"
                                 src="https://randomuser.me/api/portraits/women/19.jpg" alt="user avatar" width="400"
                                 height="400" loading="lazy"/>
                            <div className="flex-1 flex justify-between items-start">
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700">Sneha Rao</h6>
                                    <p className="text-sm text-gray-500">Product Designer</p>
                                </div>
                                <a href="https://www.facebook.com/sneharao/posts/1234567890"
                                   className="text-green-500 hover:text-green-600 ml-4">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8">Absolutely love these seat covers. They're stylish, comfortable, and were
                            really easy to
                            install.
                            My car interior looks brand new!</p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Reviews;