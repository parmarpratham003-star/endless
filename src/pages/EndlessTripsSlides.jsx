import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    badge: "Travel Made Simple",
    title: "Plan Your Perfect Holiday with ",
    highlight: "Endless Trips",
    desc: "20+ years of experience crafting international and domestic tour packages across 75+ countries.",
    cards: [
      { title: "International Tours", desc: "Europe, Dubai, Maldives & more" },
      { title: "Domestic Holidays", desc: "Goa, Kashmir, Kerala, Ladakh" },
      { title: "Honeymoon Packages", desc: "Luxury romantic escapes" },
      { title: "Custom Trips", desc: "Your plan, your budget" },
    ],
  },
  {
    badge: "Why Choose Us",
    title: "Trusted Travel Experts for ",
    highlight: "20+ Years",
    desc: "Thousands of happy travelers trust Endless Trips for transparent pricing, expert planning, and 24/7 support.",
    cards: [
      { title: "75+ Countries", desc: "Worldwide destination coverage" },
      { title: "10,000+ Clients", desc: "Happy travelers globally" },
      { title: "24/7 Support", desc: "We’re always with you" },
      { title: "Best Pricing", desc: "No hidden costs" },
    ],
  },
  {
    badge: "Start Your Journey",
    title: "Your ",
    highlight: "Dream Trip",
    desc: "From planning to execution, we take care of everything so you can travel stress-free.",
    cards: [
      { title: "Free Consultation", desc: "Talk to our travel experts" },
      { title: "Tailor-Made Plans", desc: "Designed just for you" },
      { title: "Secure Booking", desc: "Safe & trusted payments" },
      { title: "End-to-End Service", desc: "Start to finish support" },
    ],
  },
];

export default function EndlessTripsSlides() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-[#faf7ff]">

      {/* ===== BACKGROUND (digital-sahay style) ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-300/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-orange-300/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[120px]" />
      </div>

      {/* ===== SLIDE TRACK (HORIZONTAL) ===== */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT CONTENT */}
              <div>
                <span className="inline-block mb-4 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
                  {slide.badge}
                </span>

                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {slide.title}
                  <span className="text-purple-600">{slide.highlight}</span>
                </h2>

                <p className="text-lg text-gray-600 mb-10 max-w-xl">
                  {slide.desc}
                </p>

                <div className="flex gap-4">
                  <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition">
                    Explore Packages
                  </button>
                  <button className="border border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition">
                    Get Free Quote
                  </button>
                </div>
              </div>

              {/* RIGHT CARDS */}
              <div className="grid sm:grid-cols-2 gap-6">
                {slide.cards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* ===== ARROWS ===== */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-full hover:bg-purple-50 transition"
      >
        <FaChevronLeft className="text-purple-600" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-full hover:bg-purple-50 transition"
      >
        <FaChevronRight className="text-purple-600" />
      </button>

      {/* ===== DOTS ===== */}
      <div className="flex justify-center gap-3 mt-16">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-8 bg-purple-600" : "w-3 bg-purple-300"
            }`}
          />
        ))}
      </div>
{/* Animated Floating Blobs */}
<div className="absolute inset-0 pointer-events-none z-0">

  {/* Purple Blob */}
  <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-300/40 rounded-full blur-[140px] animate-float-1" />

  {/* Orange Blob */}
  <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-orange-300/40 rounded-full blur-[140px] animate-float-2" />

  {/* Blue Blob */}
  <div className="absolute bottom-[-120px] left-1/3 w-[420px] h-[420px] bg-blue-300/30 rounded-full blur-[140px] animate-float-3" />

</div>

    </section>
  );
}
