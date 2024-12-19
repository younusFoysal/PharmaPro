import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {CartProvider} from "@/hook/CartContext";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/Footer";

const roboto = Roboto({ weight: ['400', '500', '900'], subsets: ["latin"] });

export const metadata = {
    title: {
        default: "Pharma Pro",
        template: " %s | Pharma Pro",
    },
    description: "Welcome to Pharma pro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
    <body className={roboto.className}>
    <CartProvider>

    <Navbar></Navbar>

    <div className="">{children}</div>
        <Toaster />

        <Footer/>
    </CartProvider>

    </body>
    </html>
  );
}
