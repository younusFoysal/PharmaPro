import React from "react";
import { useCart } from "@/hook/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    // Calculate subtotal
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.dprice);
            const quantity = parseInt(item.quantity, 10);
            if (isNaN(price) || isNaN(quantity)) {
                return total; // Return the accumulated total if either price or quantity is invalid
            }
            return total + price * quantity;
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const taxes = (subtotal * 0.1).toFixed(2); // Assuming 10% tax
    const shipping = subtotal > 50 ? 0 : 5; // Free shipping above $50
    const total = (subtotal + parseFloat(taxes) + shipping).toFixed(2);

    return (
        <div className="py-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                <tr>
                                    <th className="text-left font-semibold">Product</th>
                                    <th className="text-left font-semibold">Price</th>
                                    <th className="text-left font-semibold">Quantity</th>
                                    <th className="text-left font-semibold">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cartItems.length > 0 ? (
                                    cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img
                                                        className="h-16 w-16 mr-4"
                                                        src={item.img }
                                                        alt={item.mname}
                                                    />
                                                    <span className="font-semibold">{item.mname}</span>
                                                </div>
                                            </td>
                                            <td className="py-4">${item.dprice}</td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button
                                                        className="border rounded-md py-2 px-4 mr-2"
                                                        onClick={() =>
                                                            updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-center w-8">{item.quantity}</span>
                                                    <button
                                                        className="border rounded-md py-2 px-4 ml-2"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-4">${(item.dprice * item.quantity).toFixed(2)}</td>
                                            <td>
                                                <button
                                                    className="text-red-500"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-4">
                                            Your cart is empty.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Taxes</span>
                                <span>${taxes}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>${shipping.toFixed(2)}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Total</span>
                                <span className="font-semibold">${total}</span>
                            </div>
                            <button className="bg-green-900 text-white py-2 px-4 rounded-lg mt-4 w-full hover:scale-105 duration-500 shadow-lg">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
