import React from "react";

export default function StaticLandingSection() {
  return (
    <>
      {/* ===== INTERNAL CSS (DO NOT REMOVE) ===== */}
      <style>{`
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }

        @keyframes floatDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(40px); }
        }
      `}</style>

      <section
        style={{
          background: "linear-gradient(135deg, #020617, #020617, #0f172a)",
          backgroundSize: "300% 300%",
          animation: "bgShift 20s ease infinite",
        }}
        className="
          relative isolate overflow-hidden
          min-h-screen flex items-center
        "
      >
        {/* ===== FLOATING ORBS ===== */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            style={{ animation: "floatUp 12s ease-in-out infinite" }}
            className="
              absolute -top-40 -left-40
              w-[520px] h-[520px]
              bg-blue-500/25
              rounded-full blur-[160px]
            "
          />

          <div
            style={{ animation: "floatDown 16s ease-in-out infinite" }}
            className="
              absolute top-1/3 -right-40
              w-[520px] h-[520px]
              bg-purple-500/25
              rounded-full blur-[160px]
            "
          />

          <div
            style={{ animation: "floatUp 14s ease-in-out infinite" }}
            className="
              absolute bottom-[-120px] left-1/3
              w-[420px] h-[420px]
              bg-cyan-500/25
              rounded-full blur-[160px]
            "
          />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 w-full">
          <div className="
            max-w-7xl mx-auto px-6
            grid lg:grid-cols-2 gap-16 items-center
          ">
            {/* LEFT */}
            <div>
              <span className="
                inline-block mb-4 px-4 py-2 rounded-full
                font-semibold text-sm
                bg-blue-500/10 text-blue-400
              ">
                Travel Made Simple
              </span>

              <h1 className="
                text-4xl md:text-5xl font-extrabold leading-tight mb-6
                text-slate-100
              ">
                Discover the World with{" "}
                <span className="text-blue-400">Endless Trips</span>
              </h1>

              <p className="
                text-lg mb-10 max-w-xl
                text-slate-400
              ">
                Handcrafted journeys across the globe — premium travel
                experiences designed with care, comfort, and confidence.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="
                  bg-blue-600 text-white
                  px-8 py-4 rounded-xl font-semibold
                  hover:bg-blue-700 transition
                ">
                  Explore Packages
                </button>

                <button className="
                  border border-blue-500 text-blue-400
                  px-8 py-4 rounded-xl font-semibold
                  hover:bg-blue-500/10 transition
                ">
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
                    rounded-2xl p-6
                    bg-white/5 backdrop-blur
                    shadow-lg hover:shadow-xl transition
                    border border-white/10
                  "
                >
                  <h3 className="text-xl font-bold mb-2 text-slate-100">
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
