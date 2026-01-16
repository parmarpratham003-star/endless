import React from "react";

export default function StaticLandingSection() {
  return (
    <>
      {/* ===== SIMPLE & WORKING BACKGROUND ANIMATION ===== */}
      <style>{`
        @keyframes bgMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <section
        style={{
          background:
            "linear-gradient(270deg, #020617, #022c22, #020617)",
          backgroundSize: "400% 400%",
          animation: "bgMove 14s linear infinite",
        }}
        className="
          relative isolate overflow-hidden
          min-h-screen flex items-center
        "
      >
        {/* ===== CONTENT ===== */}
        <div className="relative z-10 w-full">
          <div
            className="
              max-w-7xl mx-auto px-6
              grid lg:grid-cols-2 gap-16 items-center
            "
          >
            {/* LEFT CONTENT */}
            <div>
              <span
                className="
                  inline-block mb-4 px-4 py-2 rounded-full
                  font-semibold text-sm
                  bg-emerald-500/10 text-emerald-400
                "
              >
                Travel Made Simple
              </span>

              <h1
                className="
                  text-4xl md:text-5xl font-extrabold leading-tight mb-6
                  text-slate-100
                "
              >
                Explore the World with{" "}
                <span className="text-emerald-400">
                  Endless Trips
                </span>
              </h1>

              <p
                className="
                  text-lg mb-10 max-w-xl
                  text-slate-400
                "
              >
                Premium international & domestic journeys designed for comfort,
                elegance, and unforgettable experiences.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button
                  className="
                    bg-emerald-600 text-white
                    px-8 py-4 rounded-xl font-semibold
                    transition-all duration-300
                    hover:bg-emerald-700 hover:scale-105
                    hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]
                  "
                >
                  Explore Packages
                </button>

                <button
                  className="
                    border border-emerald-500 text-emerald-400
                    px-8 py-4 rounded-xl font-semibold
                    transition-all duration-300
                    hover:bg-emerald-500/10 hover:scale-105
                  "
                >
                  Get Free Quote
                </button>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "International Tours", desc: "Europe, Dubai, Maldives & more" },
                { title: "Domestic Holidays", desc: "Goa, Kashmir, Kerala, Ladakh" },
                { title: "Honeymoon Packages", desc: "Luxury romantic escapes" },
                { title: "Custom Trips", desc: "Your plan, your budget" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    group rounded-2xl p-6
                    bg-white/5 backdrop-blur
                    border border-white/10
                    transition-all duration-300
                    hover:-translate-y-3
                    hover:border-emerald-400/40
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                  "
                >
                  <h3
                    className="
                      text-xl font-bold mb-2
                      text-slate-100
                      group-hover:text-emerald-300 transition
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
