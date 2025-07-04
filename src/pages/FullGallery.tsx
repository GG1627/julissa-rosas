import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type ImageData = {
  src: string;
  size: "auto";
};

export default function FullGallery() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // All the images - we'll let CSS masonry handle the natural arrangement
  const allImages: ImageData[] = [
    { src: "/images/img1.JPG", size: "auto" },
    { src: "/images/img2.JPG", size: "auto" },
    { src: "/images/img3.JPG", size: "auto" },
    { src: "/images/img4.JPG", size: "auto" },
    { src: "/images/img5.JPG", size: "auto" },
    { src: "/images/img6.JPG", size: "auto" },
    { src: "/images/img7.JPG", size: "auto" },
    { src: "/images/img8.JPG", size: "auto" },
    { src: "/images/img9.JPG", size: "auto" },
    { src: "/images/img10.JPG", size: "auto" },
    { src: "/images/img11.JPG", size: "auto" },
    { src: "/images/img12.JPG", size: "auto" },
    { src: "/images/img13.JPG", size: "auto" },
    { src: "/images/img14.JPG", size: "auto" },
    { src: "/images/img15.JPG", size: "auto" },
    { src: "/images/img16.JPG", size: "auto" },
    { src: "/images/img17.JPG", size: "auto" },
    { src: "/images/img18.JPG", size: "auto" },
  ];

  // Reset any potential scroll locks from other pages and scroll to top
  useEffect(() => {
    // Reset scroll position immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Reset any layout styles
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    document.body.style.position = "static";

    // Ensure scroll position stays at top after render
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  // Handle modal state
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const goBack = () => {
    navigate("/#home");
  };

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // No size classes needed - using CSS columns for natural flow

  return (
    <section className="min-h-screen bg-[#e3e3db] py-8 px-4 sm:px-6 lg:px-8">
      {/* Header with back button */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={goBack}
            className="bg-black text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300 border border-black hover:border-gray-800 flex items-center gap-2"
          >
            <span>←</span>
            Back
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight">
            All Images
          </h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        {/* Masonry Image Grid with CSS Columns */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4">
          {allImages.map((imageData, index) => (
            <div
              key={imageData.src}
              className="group cursor-pointer overflow-hidden bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg rounded-lg mb-4 break-inside-avoid"
              onClick={() => openModal(imageData.src)}
            >
              <img
                src={imageData.src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full size image"
              className="max-w-[90vw] max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
