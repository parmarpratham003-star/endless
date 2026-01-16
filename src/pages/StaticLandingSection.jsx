import React from "react";

export default function StaticLandingSection() {
  return (
    <section
      className="
        relative isolate overflow-hidden
        min-h-screen
        flex items-center
        bg-[#faf7ff] dark:bg-[#0b0b14]
      "
    >
      {/* ===== STATIC BACKGROUND BLOBS ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Purple Blob */}
        <div className="
          absolute -top-40 -left-40
          w-[520px] h-[520px]
          bg-purple-300/40 dark:bg-purple-700/30
          rounded-full blur-[140px]
        " />

        {/* Orange Blob */}
        <div className="
          absolute top-1/3 -right-40
          w-[520px] h-[520px]
          bg-orange-300/40 dark:bg-orange-600/25
          rounded-full blur-[140px]
        " />

        {/* Blue Blob */}
        <div className="
          absolute bottom-[-120px] left-1/3
          w-[420px] h-[420px]
          bg-blue-300/30 dark:bg-blue-700/25
          rounded-full blur-[140px]
        " />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full">
        <div className="
          max-w-7xl mx-auto px-6
          grid lg:grid-cols-2 gap-16 items-center
        ">
          {/* LEFT CONTENT */}
          <div>
            <span className="
              inline-block mb-4 px-4 py-2 rounded-full font-semibold text-sm
              bg-orange-100 text-orange-600
              dark:bg-orange-500/20 dark:text-orange-300
            ">
              Travel Made Simple
            </span>

            <h1 className="
              text-4xl md:text-5xl font-extrabold leading-tight mb-6
              text-gray-900 dark:text-white
            ">
              Plan Your Perfect Holiday with{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Endless Trips
              </span>
            </h1>

            <p className="
              text-lg mb-10 max-w-xl
              text-gray-600 dark:text-gray-300
            ">
              20+ years of experience crafting international and domestic travel
              packages across 75+ countries — trusted, transparent, and fully
              customized.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="
                bg-purple-600 text-white
                px-8 py-4 rounded-xl font-semibold
                hover:bg-purple-700 transition
              ">
                Explore Packages
              </button>

              <button className="
                border border-purple-600 text-purple-600
                dark:border-purple-400 dark:text-purple-400
                px-8 py-4 rounded-xl font-semibold
                hover:bg-purple-50 dark:hover:bg-purple-500/10 transition
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
                  bg-white/90 dark:bg-white/5
                  backdrop-blur
                  shadow-md hover:shadow-xl transition
                  border border-transparent dark:border-white/10
                "
              >
                <h3 className="
                  text-xl font-bold mb-2
                  text-gray-900 dark:text-white
                ">
                  {item.title}
                </h3>

                <p className="
                  text-sm
                  text-gray-600 dark:text-gray-400
                ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
