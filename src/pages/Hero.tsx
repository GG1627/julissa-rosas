import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import SplitType from "split-type";
import "./Hero.css";

const projectsData = [
  {
    name: "Sunset Beaches",
    director: "Travel",
    location: "Costa Rica",
  },
  {
    name: "Street Markets",
    director: "Culture",
    location: "Mexico City",
  },
  {
    name: "Gothic Quarter",
    director: "Architecture",
    location: "Barcelona, Spain",
  },
  {
    name: "Stone Streets",
    director: "Travel",
    location: "Porto, Portugal",
  },
  {
    name: "Art Deco",
    director: "Architecture",
    location: "Miami, Florida",
  },
  {
    name: "Campus Moments",
    director: "Lifestyle",
    location: "Atlanta, Georgia",
  },
  {
    name: "Christmas Markets",
    director: "Culture",
    location: "Berlin, Germany",
  },
  {
    name: "City of Light",
    director: "Urban",
    location: "Paris, France",
  },
  {
    name: "Thames Views",
    director: "Portrait",
    location: "London, England",
  },
  {
    name: "Beach Portraits",
    director: "Portrait",
    location: "Tampa, Florida",
  },
  {
    name: "Ancient Rome",
    director: "Architecture",
    location: "Rome, Italy",
  },
  {
    name: "Local Cuisine",
    director: "Food",
    location: "Bangkok, Thailand",
  },
  {
    name: "Golden Light",
    director: "Nature",
    location: "Santorini, Greece",
  },
  {
    name: "Cherry Blossoms",
    director: "Culture",
    location: "Tokyo, Japan",
  },
  {
    name: "Mountain Views",
    director: "Nature",
    location: "Swiss Alps",
  },
  {
    name: "University Life",
    director: "Lifestyle",
    location: "Amsterdam, Netherlands",
  },
];

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Hero() {
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const locationsContainerRef = useRef<HTMLDivElement>(null);
  const introCopyRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced scroll to top on page load/reload
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    scrollToTop();

    // Also execute after a small delay to ensure it takes effect
    setTimeout(scrollToTop, 10);

    // Store original styles to restore later
    const originalBodyStyles = {
      overflow: document.body.style.overflow,
      height: document.body.style.height,
      position: document.body.style.position,
      width: document.body.style.width,
      top: document.body.style.top,
      left: document.body.style.left,
    };

    const originalDocumentStyles = {
      overflow: document.documentElement.style.overflow,
      height: document.documentElement.style.height,
    };

    // Enhanced scroll locking - prevent all forms of scrolling
    const disableScroll = () => {
      // Get current scroll position before locking
      const scrollY = window.scrollY;

      // Apply styles to prevent scrolling
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";

      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";

      // Prevent scroll events
      document.addEventListener("wheel", preventDefault, { passive: false });
      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
      document.addEventListener("keydown", preventScrollKeys, {
        passive: false,
      });
    };

    // Helper functions to prevent scrolling
    const preventDefault = (e: Event) => {
      e.preventDefault();
    };

    const preventScrollKeys = (e: KeyboardEvent) => {
      const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, page up/down, home, end, arrows
      if (keys.includes(e.keyCode)) {
        e.preventDefault();
      }
    };

    // Enable scrolling function
    const enableScroll = () => {
      // Remove event listeners
      document.removeEventListener("wheel", preventDefault);
      document.removeEventListener("touchmove", preventDefault);
      document.removeEventListener("keydown", preventScrollKeys);

      // Restore scroll position
      const scrollY = document.body.style.top;

      // Restore original styles
      document.documentElement.style.overflow =
        originalDocumentStyles.overflow || "auto";
      document.documentElement.style.height =
        originalDocumentStyles.height || "auto";

      document.body.style.overflow = originalBodyStyles.overflow || "auto";
      document.body.style.height = originalBodyStyles.height || "auto";
      document.body.style.position = originalBodyStyles.position || "static";
      document.body.style.width = originalBodyStyles.width || "auto";
      document.body.style.top = originalBodyStyles.top || "auto";
      document.body.style.left = originalBodyStyles.left || "auto";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    };

    // Start with scroll disabled
    disableScroll();

    const projectsContainer = projectsContainerRef.current;
    const locationsContainer = locationsContainerRef.current;
    const introCopy = introCopyRef.current;
    const titleHeading = titleRef.current;

    if (
      !projectsContainer ||
      !locationsContainer ||
      !introCopy ||
      !titleHeading
    ) {
      // Restore styles if component setup fails
      enableScroll();
      return;
    }

    // Get all image elements
    const gridImages = gsap.utils.toArray(".img");
    const heroImageElement = document.querySelector(".hero-img");

    // Initialize SplitType
    const introCopySplit = new SplitType(".intro-copy h3", {
      types: "words",
      absolute: false,
    });

    const titleSplit = new SplitType(".title h1", {
      types: "words",
      absolute: false,
    });

    // Fix the typo in the image path
    const allImageSources = Array.from(
      {
        length: 18, // Changed to match actual available images (img1.JPG through img18.JPG)
      },
      (_, i) => `/images/img${i + 1}.JPG` // Fixed typo: imgages -> images, and made path absolute
    );

    const getRandomImageSet = () => {
      const shuffled = [...allImageSources].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 9);
    };

    function initializeDynamicContent() {
      if (!projectsContainer || !locationsContainer) return;

      // Clear existing content
      projectsContainer.innerHTML = "";
      locationsContainer.innerHTML = "";

      projectsData.forEach((project) => {
        const projectItem = document.createElement("div");
        projectItem.className = "project-item";

        const projectName = document.createElement("p");
        projectName.textContent = project.name;

        const directorName = document.createElement("p");
        directorName.textContent = project.director;

        projectItem.appendChild(projectName);
        projectItem.appendChild(directorName);

        if (projectsContainer) {
          projectsContainer.appendChild(projectItem);
        }
      });

      projectsData.forEach((project) => {
        const locationItem = document.createElement("div");
        locationItem.className = "location-item";

        const locationName = document.createElement("p");
        locationName.textContent = project.location;

        const emptyCell = document.createElement("p");
        emptyCell.textContent = "";

        locationItem.appendChild(locationName);
        locationItem.appendChild(emptyCell);
        if (locationsContainer) {
          locationsContainer.appendChild(locationItem);
        }
      });
    }

    function startImageRotation() {
      const totalCycles = 20;
      for (let cycle = 0; cycle < totalCycles; cycle++) {
        const randomImages = getRandomImageSet();

        gsap.to(
          {},
          {
            duration: 0,
            delay: cycle * 0.15,
            onComplete: () => {
              gridImages.forEach((img, index) => {
                const imgElement = (img as Element).querySelector("img");

                if (cycle === totalCycles - 1 && img === heroImageElement) {
                  if (imgElement) imgElement.src = "/images/img19.JPG";
                  gsap.to(".hero-img img", { scale: 2 });
                } else {
                  if (imgElement && randomImages[index]) {
                    imgElement.src = randomImages[index];
                  }
                }
              });
            },
          }
        );
      }
    }

    function setupInitialStates() {
      gsap.set("nav", {
        y: "-125%",
      });

      gsap.set(introCopySplit.words, {
        y: "110%",
      });

      gsap.set(titleSplit.words, {
        y: "110%",
      });
    }

    function createAnimationTimelines() {
      const overlayTimeline = gsap.timeline();
      const imagesTimeline = gsap.timeline();
      const textTimeline = gsap.timeline();

      overlayTimeline.to(".logo-line-1", {
        backgroundPosition: "0% 0%",
        color: "#fff",
        duration: 1,
        ease: "none",
        delay: 0.5,
        onComplete: () => {
          gsap.to(".logo-line-2", {
            backgroundPosition: "0% 0%",
            color: "#fff",
            duration: 1,
            ease: "none",
          });
        },
      });

      overlayTimeline.to([".projects-header", ".project-item"], {
        opacity: 1,
        duration: 0.15,
        stagger: 0.075,
        delay: 1,
      });

      overlayTimeline.to(
        [".locations-header", ".location-item"],
        {
          opacity: 1,
          duration: 0.15,
          stagger: 0.075,
        },
        "<"
      );

      overlayTimeline.to(".project-item", {
        color: "#fff",
        duration: 0.15,
        stagger: 0.075,
      });

      overlayTimeline.to(
        ".location-item",
        {
          color: "#fff",
          duration: 0.15,
          stagger: 0.075,
        },
        "<"
      );

      overlayTimeline.to([".projects-header", ".project-item"], {
        opacity: 0,
        duration: 0.15,
        stagger: 0.075,
      });

      overlayTimeline.to(
        [".locations-header", ".location-item"],
        {
          opacity: 0,
          duration: 0.15,
          stagger: 0.075,
        },
        "<"
      );

      overlayTimeline.to(".overlay", {
        opacity: 0,
        duration: 0.5,
        delay: 1.5,
      });

      imagesTimeline.to(".img", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        delay: 2.5,
        stagger: 0.05,
        ease: "hop",
        onStart: () => {
          setTimeout(() => {
            startImageRotation();
            gsap.to(".loader", { opacity: 0, duration: 0.3 });
          }, 1000);
        },
      });

      imagesTimeline.to(".img:not(.hero-img)", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        delay: 3.5,
        stagger: 0.05,
        ease: "hop",
      });

      imagesTimeline.to(".hero-img", {
        y: -50,
        duration: 1,
        ease: "hop",
      });

      imagesTimeline.to(".hero-img", {
        scale: 4,
        clipPath: "polygon(20% 10%, 80% 10%, 80% 90%, 20% 90%)",
        duration: 1.5,
        ease: "hop",
        onStart: () => {
          gsap.to(".hero-img img", {
            scale: 1,
            duration: 1.5,
            ease: "hop",
          });
          gsap.to(".banner-img", {
            scale: 1,
            delay: 0.5,
            duration: 0.5,
          });

          gsap.to("nav", {
            y: "0%",
            duration: 1,
            ease: "hop",
            delay: 0.25,
          });
        },
      });

      imagesTimeline.to(
        ".banner-img-1",
        {
          left: "40%",
          rotate: -20,
          duration: 1.5,
          delay: 0.5,
          ease: "hop",
        },
        "<"
      );

      imagesTimeline.to(
        ".banner-img-2",
        {
          left: "60%",
          rotate: 20,
          duration: 1.5,
          ease: "hop",
        },
        "<"
      );

      textTimeline.to(titleSplit.words, {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        delay: 9.5,
        ease: "power3.out",
      });

      textTimeline.to(
        introCopySplit.words,
        {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          delay: 0.25,
          ease: "power3.out",
          onComplete: () => {
            // Re-enable scrolling after animation completes
            enableScroll();
          },
        },
        "<"
      );
    }

    function init() {
      initializeDynamicContent();
      setupInitialStates();
      createAnimationTimelines();
    }

    // Start the animation when component mounts
    init();

    // Enhanced cleanup function
    const cleanup = () => {
      // Kill any running GSAP animations to prevent memory leaks
      gsap.killTweensOf("*");

      // Restore original scroll behavior
      enableScroll();

      // Additional cleanup for any remaining styles
      document.body.style.transform = "none";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
    };

    return cleanup;
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <section className="hero-section">
      <div className="overlay" ref={overlayRef}>
        {/* Projects */}
        <div className="projects">
          <div className="projects-header">
            <p>Projects</p>
            <p>Category</p>
          </div>
          <div ref={projectsContainerRef}></div>
        </div>

        {/* Loader */}
        <div className="loader" ref={loaderRef}>
          <h1 className="logo-line-1">Julissa</h1>
          <h1 className="logo-line-2">Rosas</h1>
        </div>

        {/* Locations */}
        <div className="locations">
          <div className="locations-header">
            <p>Location</p>
            <p></p>
          </div>
          <div ref={locationsContainerRef}></div>
        </div>
      </div>

      <div className="image-grid">
        <div className="grid-row">
          <div className="img">
            <img src="/images/img1.JPG" alt="Project 1" />
          </div>
          <div className="img">
            <img src="/images/img2.JPG" alt="Project 2" />
          </div>
          <div className="img">
            <img src="/images/img3.JPG" alt="Project 3" />
          </div>
        </div>

        <div className="grid-row">
          <div className="img">
            <img src="/images/img4.JPG" alt="Project 4" />
          </div>
          <div className="img hero-img" ref={heroImageRef}>
            <img src="/images/img19.JPG" alt="Hero Project" />
          </div>
          <div className="img">
            <img src="/images/img6.JPG" alt="Project 6" />
          </div>
        </div>

        <div className="grid-row">
          <div className="img">
            <img src="/images/img7.JPG" alt="Project 7" />
          </div>
          <div className="img">
            <img src="/images/img8.JPG" alt="Project 8" />
          </div>
          <div className="img">
            <img src="/images/img9.JPG" alt="Project 9" />
          </div>
        </div>
      </div>

      <nav ref={navRef}>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-logo">
          <a href="#">
            Julissa
            <br />
            Rosas
          </a>
        </div>
        <div className="links">
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="banner-img banner-img-1">
        <img src="/images/img11.JPG" alt="Banner 1" />
      </div>
      <div className="banner-img banner-img-2">
        <img src="/images/img12.JPG" alt="Banner 2" />
      </div>

      <div className="intro-copy" ref={introCopyRef}>
        <h3>Creative Solutions</h3>
        <h3>Impactful Results</h3>
      </div>

      <div className="title" ref={titleRef}>
        <h1>Crafting Bold Experiences</h1>
      </div>
    </section>
  );
}
