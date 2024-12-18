import React from 'react';
import {useCart} from "@/hook/CartContext";

const Product = ({id, img, mname, dprice, price }) => {

    const { addToCart } = useCart();
    return (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 border">
            <img
                className="w-full aspect-square object-cover"
                src={img}
                alt={mname}
            />
            <div className="p-4 flex flex-col justify-between w-full">
                <h3 className="text-sm md:text-md font-bold mb-2 uppercase text-gray-700 text-center leading-4">
                    {mname}
                </h3>
                <div className="text-center mb-3">
                    <span className="text-lg md:text-xl font-bold text-green-900">${dprice}</span>{' '}
                    <span className="text-sm md:text-base text-gray-500 line-through">${price}</span>
                </div>
                <button
                    onClick={() => addToCart({ id, mname, dprice, img })}
                    className="w-full rounded-md bg-green-700 px-4 py-2 text-sm md:text-md font-medium text-white hover:bg-green-600 focus:outline-none">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
