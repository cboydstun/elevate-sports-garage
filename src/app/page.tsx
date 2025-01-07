import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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

        {/* Social Proof */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Athletes Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">{"⭐".repeat(5)}</div>
                <p className="mb-4">
                  "The quality of the pitching machines is incredible. I&apos;ve
                  seen a real improvement in my batting average since training
                  here."
                </p>
                <p className="font-bold">- Mike R., High School Athlete</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">{"⭐".repeat(5)}</div>
                <p className="mb-4">
                  "As a softball coach, I recommend Elevate Sports Garage to all
                  my players. The facility is top-notch and the staff is
                  knowledgeable."
                </p>
                <p className="font-bold">- Sarah T., Softball Coach</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">{"⭐".repeat(5)}</div>
                <p className="mb-4">
                  "Finally, a professional batting facility in Canyon Lake! The
                  24/7 access fits perfectly with my training schedule."
                </p>
                <p className="font-bold">- James L., College Player</p>
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
