import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('image/goa.png')", // change image if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-semibold">
          ✨ Trusted by 10,000+ Travelers
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Explore The World With
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            Endless Trips
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
          20+ years of crafting unforgettable journeys across 75+ countries.
          Your dream holiday starts here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition flex items-center justify-center gap-2 shadow-xl">
            Explore Packages <FaChevronRight />
          </button>

          <button className="border-2 border-white/60 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
            Get Free Quote
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-10 h-16 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
