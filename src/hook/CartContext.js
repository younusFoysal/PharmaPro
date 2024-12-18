"use client"
import React, { createContext, useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
        toast.success("Product added!");
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
