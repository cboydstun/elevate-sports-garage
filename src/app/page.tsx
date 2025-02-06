import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Elevate Sports Garage",
    description:
      "Professional-grade batting cages equipped with state-of-the-art pitching machines for baseball and softball players of all skill levels.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1270 Sattler Rd",
      addressLocality: "New Braunfels",
      addressRegion: "TX",
      postalCode: "78132",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "29.850352463547456",
      longitude: "-98.17414594905412",
    },
    openingHours: ["Mo-Su 00:00-23:59"],
    url: "https://elevatesportsgarage.com",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-center md:gap-12">
              <Image
                src="/logo.png"
                alt="Elevate Sports Garage Logo"
                width={200}
                height={200}
                className="mb-8 md:mb-0"
                priority
              />
              <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Elevate Your Game at{" "}
                  <span className="text-[#10ff00]">
                    Canyon Lake&apos;s Premier
                  </span>{" "}
                  Batting Facility
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Professional-grade batting cages equipped with
                  state-of-the-art pitching machines for baseball and softball
                  players of all skill levels.
                </p>
                <a
                  href="#map"
                  className="inline-block bg-[#10ff00] text-black font-bold py-4 px-8 rounded-full hover:bg-[#0dd000] transition-colors"
                >
                  Start Training Today
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 px-6 md:px-12 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <h2 className="text-2xl text-center bg-[#8f9480] px-8 py-4 rounded-lg text-black">
                ASK US ABOUT OUR OPENING SPECIAL <br /> SAVE YOUR PLATINUM
                MEMBER SPOT NOW
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Silver Membership */}
              <div className="border border-gray-700 rounded-lg hover:border-[#10ff00] transition-colors flex flex-col h-full bg-[#8f9480]">
                <h3 className="text-6xl font-bold mb-4 text-center bg-[#10ff00] text-black w-full px-8 py-2">
                  Silver
                </h3>
                <div className="p-8 pt-0 flex-grow flex flex-col">
                  <ul className="space-y-4 flex-grow text-black text-2xl">
                    <li className="flex items-center">
                      ACCESS <br /> WEEKDAY 3:30 PM - 9 PM
                    </li>
                    <li className="flex items-center">SHARED CAGES</li>
                    <li className="flex items-center">45 SWINGS EVERY DAY</li>
                    <li className="flex items-center font-bold">
                      $5 FOR EXTRA BUCKET
                    </li>
                    <li className="flex items-center font-bold">
                      10% OFF PURCHASES AND CLASSES
                    </li>
                  </ul>
                  <button className="w-full bg-[#10ff00] text-black font-bold py-3 px-6 hover:bg-white transition-colors">
                    <a
                      href="https://www.vagaro.com/cl/uftQ7gHMdHuxbk9lr95qOFporscEq8cEf-n4zx-IqFQ="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <span className="text-4xl">$45</span>
                      <span className="text-sm">monthly</span>
                    </a>
                  </button>
                </div>
              </div>

              {/* Gold Membership */}
              <div className="border border-gray-700 rounded-lg hover:border-[#10ff00] transition-colors flex flex-col h-full bg-[#8f9480]">
                <h3 className="text-6xl font-bold mb-4 text-center bg-[#10ff00] text-black w-full px-8 py-2">
                  Gold
                </h3>
                <div className="p-8 pt-0 flex-grow flex flex-col">
                  <ul className="space-y-4 flex-grow text-black text-2xl">
                    <li className="flex items-center">
                      WEEKDAY AND WEEKEND ACCESS
                    </li>
                    <li className="flex items-center">
                      BRING A FRIEND FOR FREE
                    </li>
                    <li className="flex items-center">
                      2.5 HOURS WEEKLY + VIRTUAL BATTING
                    </li>
                    <li className="flex items-center font-bold">
                      $10 FOR EXTRA HOUR
                    </li>
                    <li className="flex items-center font-bold">
                      10% OFF PURCHASES AND CLASSES
                    </li>{" "}
                  </ul>
                  <button className="w-full bg-[#10ff00] text-black font-bold py-3 px-6 hover:bg-white transition-colors">
                    <a
                      href="https://www.vagaro.com/cl/DaQegUQ305Bsr6sFBZ4B3jH0uGERbapdqFbSl~Zgo8s="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <span className="text-4xl">$60</span>
                      <span className="text-sm">monthly</span>
                    </a>
                  </button>
                </div>
              </div>

              {/* Platinum Membership */}
              <div className="border border-gray-700 rounded-lg hover:border-[#10ff00] transition-colors flex flex-col h-full bg-[#8f9480]">
                <h3 className="text-6xl font-bold mb-4 text-center bg-[#10ff00] text-black w-full px-8 py-2">
                  Platinum
                </h3>
                <div className="p-8 pt-0 flex-grow flex flex-col">
                  <ul className="space-y-4 flex-grow text-black text-2xl">
                    <li className="flex items-center">
                      24/7 ACCESS <br /> (VIP CARD ACCESS)
                    </li>
                    <li className="flex items-center text-white">
                      WIN REALITY PROFILE <br /> ($250 VALUE)
                    </li>
                    <li className="flex items-center">PRIVATE CAGE TIME</li>
                    <li className="flex items-center font-bold">
                      15% OFF PRUCHASES AND CLASSES
                    </li>
                  </ul>
                  <button className="w-full bg-[#10ff00] text-black font-bold pt-3 px-6 hover:bg-white transition-colors">
                    <a
                      href="https://www.vagaro.com/cl/pi5RmUyanXxWwI6tndXL41qAs~2d1bWoU-rE28wHAAQ="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <span className="text-4xl">$75</span>
                      <span className="text-sm">monthly</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Additional <span className="text-[#10ff00]">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-4">
                  Virtual Reality Training
                </h3>
                <p className="text-gray-700">
                  Train with your own virtual reality hitting profile, tracking
                  your progress and perfecting your technique with advanced
                  analytics.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-4">Team Practice</h3>
                <p className="text-gray-700">
                  Special discounts available for team practices. Perfect for
                  baseball and softball teams looking to enhance their batting
                  skills together.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold mb-4">Family Packages</h3>
                <p className="text-gray-700">
                  Sibling discounts available - make it fun for the whole
                  family! Build lasting memories while improving skills
                  together.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚾</div>
                <h3 className="text-xl font-bold mb-4">
                  Advanced Pitch Training
                </h3>
                <p className="text-gray-700">
                  Top-tier pitching machines help you master curve balls and
                  rise balls! Perfect your technique against various pitch
                  types.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏏</div>
                <h3 className="text-xl font-bold mb-4">
                  Tater Ball Technology
                </h3>
                <p className="text-gray-700">
                  Use your game bat (wood or composite) with our special Tater
                  balls - get authentic practice without damaging your
                  equipment.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-4">Reduced Impact</h3>
                <p className="text-gray-700">
                  Experience less sting on hands and wrists with our innovative
                  batting technology, allowing for longer, more comfortable
                  practice sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Selling Propositions */}
        <section className="py-16 px-6 md:px-12 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose{" "}
              <span className="text-[#10ff00]">Elevate Sports Garage</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-[#10ff00] text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-4">Prime Location</h3>
                <p className="text-gray-300">
                  Conveniently located in Canyon Lake, Texas, serving the entire
                  Hill Country area with easy access and ample parking.
                </p>
              </div>
              <div className="text-center">
                <div className="text-[#10ff00] text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4">Pro-Grade Equipment</h3>
                <p className="text-gray-300">
                  State-of-the-art pitching machines with adjustable speeds and
                  pitch types for both baseball and softball.
                </p>
              </div>
              <div className="text-center">
                <div className="text-[#10ff00] text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-4">Extended Hours</h3>
                <p className="text-gray-300">
                  Open early and late to accommodate your training schedule,
                  with membership options for 24/7 access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section id="map" className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Come Practice Your Swing!
            </h2>
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.7589052757603!2d-98.17414594905412!3d29.850352463547456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c9f051d3cd725%3A0x718ff5cc2ccd38e6!2s1270%20Sattler%20Rd%2C%20New%20Braunfels%2C%20TX%2078132!5e1!3m2!1sen!2sus!4v1736277681156!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full max-w-3xl rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
