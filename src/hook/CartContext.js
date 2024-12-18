"use client";
import React, { createContext, useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to the cart or increase quantity if item already exists
    const addToCart = (item) => {
        setCartItems((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                // Update the quantity of the existing item
                return prev.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // Add new item with quantity of 1
                return [...prev, { ...item, quantity: 1 }];
            }
        });
        toast.success("Product added!");
    };

    // Remove item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    };

    // Update the quantity of an item in the cart
    const updateQuantity = (itemId, quantity) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === itemId ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
            <Toaster />
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
