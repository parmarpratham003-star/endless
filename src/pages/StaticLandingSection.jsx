import React from "react";

export default function StaticLandingSection() {
  return (
    <>
      {/* ===== INTERNAL CSS (BACKGROUND + HOVER + ANIMATION) ===== */}
      <style>{`
        /* ---------- BACKGROUND GRADIENT FLOW ---------- */
        @keyframes bgShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ---------- LIGHT WAVE ---------- */
        @keyframes waveMove {
          0% { transform: translateX(-100%) rotate(15deg); }
          100% { transform: translateX(200%) rotate(15deg); }
        }

        /* ---------- FLOATING ORBS ---------- */
        @keyframes floatUp {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }

        @keyframes floatDown {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(40px); }
        }

        /* ---------- PARTICLES ---------- */
        @keyframes particleMove {
          from { transform: translateY(0); opacity: .2; }
          to { transform: translateY(-120vh); opacity: .8; }
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255,255,255,0.3);
          animation: particleMove linear infinite;
        }
      `}</style>

      <section
        style={{
          background:
            "linear-gradient(135deg, #020617, #030712, #020617)",
          backgroundSize: "300% 300%",
          animation: "bgShift 26s ease infinite",
        }}
        className="relative isolate overflow-hidden min-h-screen flex items-center"
      >
        {/* ===== LIGHT WAVES ===== */}
        <div
          style={{ animation: "waveMove 18s linear infinite" }}
          className="absolute top-0 left-0 w-[40%] h-[200%]
          bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent
          blur-[120px]"
        />

        <div
          style={{ animation: "waveMove 26s linear infinite" }}
          className="absolute top-0 left-0 w-[30%] h-[200%]
          bg-gradient-to-r from-transparent via-violet-500/10 to-transparent
          blur-[140px]"
        />

        {/* ===== FLOATING GLOWS ===== */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            style={{ animation: "floatUp 14s ease-in-out infinite" }}
            className="absolute -top-48 -left-48 w-[520px] h-[520px]
            bg-emerald-500/15 rounded-full blur-[180px]"
          />

          <div
            style={{ animation: "floatDown 18s ease-in-out infinite" }}
            className="absolute top-1/3 -right-48 w-[520px] h-[520px]
            bg-violet-500/15 rounded-full blur-[180px]"
          />

          <div
            style={{ animation: "floatUp 16s ease-in-out infinite" }}
            className="absolute bottom-[-160px] left-1/3 w-[420px] h-[420px]
            bg-cyan-500/15 rounded-full blur-[180px]"
          />
        </div>

        {/* ===== PARTICLES ===== */}
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10%",
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <span className="inline-block mb-4 px-4 py-2 rounded-full
                font-semibold text-sm bg-emerald-500/10 text-emerald-400">
                Travel Made Simple
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-100">
                Explore the World with{" "}
                <span className="text-emerald-400">Endless Trips</span>
              </h1>

              <p className="text-lg mb-10 max-w-xl text-slate-400">
                Premium international & domestic journeys designed for comfort,
                elegance, and unforgettable experiences.
              </p>

              <div className="flex gap-4 flex-wrap">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl
                  font-semibold transition-all duration-300
                  hover:bg-emerald-700 hover:scale-105
                  hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                  Explore Packages
                </button>

                <button className="border border-emerald-500 text-emerald-400
                  px-8 py-4 rounded-xl font-semibold transition-all duration-300
                  hover:bg-emerald-500/10 hover:scale-105">
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
                  className="group rounded-2xl p-6
                  bg-white/5 backdrop-blur
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-3
                  hover:border-emerald-400/40
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                >
                  <h3 className="text-xl font-bold mb-2 text-slate-100
                    group-hover:text-emerald-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
