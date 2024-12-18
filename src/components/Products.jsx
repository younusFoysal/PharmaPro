import React from 'react';
import Product from './Product'; // Assuming Product component is in the same folder

const Products = () => {
    const productList = [
        { id: 1, mname: "Paracetamol 500mg", dprice: 5, price: 10, img: "/med/1.jpg" },
        { id: 2, mname: "Ibuprofen 200mg", dprice: 7, price: 12, img: "/med/2.jpg"  },
        { id: 3, mname: "Amoxicillin 250mg", dprice: 10, price: 15, img: "/med/3.jpg"  },
        { id: 4, mname: "Cough Syrup 100ml", dprice: 8, price: 14, img: "/med/4.jpg"  },
        { id: 5, mname: "Vitamin C Tablets", dprice: 12, price: 20, img: "/med/5.jpg"  },
        { id: 6, mname: "Antacid Chewables", dprice: 6, price: 10, img: "/med/6.jpg"  },
        { id: 7, mname: "Aspirin 81mg", dprice: 4, price: 8, img: "/med/7.jpg" },
        { id: 8, mname: "Loratadine Tablets", dprice: 9, price: 15, img: "/med/8.jpg" },
        { id: 9, mname: "Multivitamins", dprice: 18, price: 25, img: "/med/9.jpg" },
        { id: 10, mname: "Cough Lozenges", dprice: 5, price: 9, img: "/med/10.jpg" },
        { id: 11, mname: "Pain Relief Gel", dprice: 14, price: 22, img: "/med/11.jpg" },
        { id: 12, mname: "Hydrogen Peroxide 500ml", dprice: 3, price: 7, img: "/med/12.jpg" }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
                Medicine Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productList.map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        mname={product.mname}
                        dprice={product.dprice}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
