import { useNavigate } from "react-router-dom";
import GridMotion from "../components/GridMotion";

const videos = [
  "/videos/vid1.mp4",
  "/videos/vid2.mp4",
  "/videos/vid3.mp4",
  "/videos/vid4.mp4",
] as const;

// Reusable phone-with-video component keeps markup tidy and consistent
const PhoneVideo: React.FC<{ src: string }> = ({ src }) => (
  <div className="relative">
    {/* Phone Frame */}
    <img
      src="/images/phone.png"
      alt="Phone Frame"
      className="w-44 sm:w-52 md:w-60 lg:w-64 xl:w-72 h-auto max-w-full"
    />
    {/* Video positioned inside phone screen */}
    <video
      className="absolute top-[12%] left-[11%] w-[78%] h-[80%] object-cover z-10 rounded-lg"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  </div>
);

export default function Portfolio() {
  const navigate = useNavigate();

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
      className="min-h-screen bg-[#e3e3db] overflow-hidden"
    >
      {/* Header */}
      <div className=" pb-4 md:pb-6 relative z-10 px-6">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black uppercase tracking-tight">
              Portfolio
            </h2>
          </div>
          <div className="flex-1 flex justify-end pr-4">
            <button
              onClick={() => navigate("/gallery")}
              className="bg-black text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300 border border-black hover:border-gray-800 cursor-pointer"
            >
              See All
            </button>
          </div>
        </div>
        <div className="w-16 md:w-24 h-1 bg-black mx-auto"></div>
      </div>

      {/* GridMotion Container with gradient overlay */}
      <div className="relative overflow-hidden">
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
      <div className="bg-[#e3e3db] pb-12 md:pb-20">
        <div className="mx-auto px-4 md:px-6">
          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 place-items-center">
            {videos.map((src) => (
              <PhoneVideo key={src} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
