"use client"
import Hero from "@/components/Hero";
import Services from "@/components/services";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Reviews from "@/components/Reviews";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-4">




        <Hero/>
        <Services/>
        <Products/>
        <CTA/>
          <Reviews/>


      </main>
  );
}
