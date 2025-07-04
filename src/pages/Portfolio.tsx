import GridMotion from "../components/GridMotion";

export default function Portfolio() {
  // Create array with all img1-img18, then cycle through to create more rows
  const portfolioItems = [
    "/images/img1.JPG",
    "/images/img2.JPG",
    "/images/img3.JPG",
    "/images/img4.JPG",
    "/images/img5.JPG",
    "/images/img6.JPG",
    "/images/img7.JPG",
    "/images/img8.JPG",
    "/images/img9.JPG",
    "/images/img10.JPG",
    "/images/img11.JPG",
    "/images/img12.JPG",
    "/images/img13.JPG",
    "/images/img14.JPG",
    "/images/img15.JPG",
    "/images/img16.JPG",
    "/images/img17.JPG",
    "/images/img18.JPG",
    // Second cycle - reuse all images
    "/images/img17.JPG",
    "/images/img1.JPG",
    "/images/img10.JPG",
    "/images/img5.JPG",
    "/images/img14.JPG",
    "/images/img9.JPG",
    "/images/img3.JPG",
    "/images/img12.JPG",
    "/images/img7.JPG",
    "/images/img16.JPG",
    "/images/img2.JPG",
    "/images/img11.JPG",
    "/images/img6.JPG",
    "/images/img15.JPG",
    "/images/img4.JPG",
    "/images/img13.JPG",
    "/images/img8.JPG",
    // Third cycle - more variety
    "/images/img17.JPG",
    "/images/img4.JPG",
    "/images/img12.JPG",
    "/images/img8.JPG",
    "/images/img16.JPG",
    "/images/img1.JPG",
    "/images/img9.JPG",
    "/images/img5.JPG",
    "/images/img13.JPG",
    "/images/img6.JPG",
    "/images/img14.JPG",
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-[#e3e3db] overflow-x-hidden"
    >
      {/* Header */}
      <div className="pt-8 md:pt-12 lg:pt-16 pb-4 md:pb-6 text-center relative z-10 px-6">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black uppercase tracking-tight mb-4 md:mb-6">
          Portfolio
        </h2>
        <div className="w-16 md:w-24 h-1 bg-black mx-auto"></div>
      </div>

      {/* GridMotion Container with gradient overlay */}
      <div className="relative overflow-x-hidden">
        {/* Top gradient overlay */}
        <div
          className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(227, 227, 219, 1) 0%, rgba(227, 227, 219, 0.8) 30%, rgba(227, 227, 219, 0) 100%)",
          }}
        ></div>

        {/* GridMotion Component */}
        <div className="w-full" style={{ height: "calc(120vh - 80px)" }}>
          <GridMotion
            items={portfolioItems}
            gradientColor="rgba(227, 227, 219, 0.3)"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#e3e3db] mt-[-100px] md:mt-[-150px] lg:mt-[-200px] pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {/* Video 1 */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <img
                  src="/images/phone.png"
                  alt="Phone Frame"
                  className="w-48 sm:w-56 md:w-64 h-auto relative z-0 max-w-full"
                />
                {/* Video positioned inside phone screen */}
                <video
                  className="absolute top-[12%] left-[11%] w-[78%] h-[80%] object-cover z-10 rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 2 */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <img
                  src="/images/phone.png"
                  alt="Phone Frame"
                  className="w-48 sm:w-56 md:w-64 h-auto relative z-0 max-w-full"
                />
                {/* Video positioned inside phone screen */}
                <video
                  className="absolute top-[12%] left-[11%] w-[78%] h-[80%] object-cover z-10 rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/vid2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 3 */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <img
                  src="/images/phone.png"
                  alt="Phone Frame"
                  className="w-48 sm:w-56 md:w-64 h-auto relative z-0 max-w-full"
                />
                {/* Video positioned inside phone screen */}
                <video
                  className="absolute top-[12%] left-[11%] w-[78%] h-[80%] object-cover z-10 rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/vid3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Video 4 */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <img
                  src="/images/phone.png"
                  alt="Phone Frame"
                  className="w-48 sm:w-56 md:w-64 h-auto relative z-0 max-w-full"
                />
                {/* Video positioned inside phone screen */}
                <video
                  className="absolute top-[12%] left-[11%] w-[78%] h-[80%] object-cover z-10 rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/vid4.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
