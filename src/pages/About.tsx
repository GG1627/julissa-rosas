import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Camera3D from "../components/Camera3D";
import TiltedCard from "../components/TiltedCard";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaCamera,
  FaVideo,
  FaPlayCircle,
  FaEdit,
  FaMicrosoft,
  FaCut,
} from "react-icons/fa";
import { SiCanva, SiNikon } from "react-icons/si";
import { MdPhotoLibrary } from "react-icons/md";

// Register GSAP plugin once at module load
// Doing this here avoids registering inside every component re-render
// and keeps the plugin registration self-contained in the About page file.
gsap.registerPlugin(ScrollTrigger);

/****************************************************************************************
 * Static data – centralised here so the JSX below stays concise and maintainable.
 ****************************************************************************************/

// Skill labels displayed in the “Core Skills” grid
const skillList = [
  "Social Media",
  "Brand Strategy",
  "Content Creation",
  "Data Analysis",
  "Visual Design",
  "Digital Marketing",
] as const;

type Experience = {
  name: string;
  role: string;
  location: string;
  description: string;
  logo: string;
  roundedLogo?: boolean; // some logos (e.g. Finance Society) are circular
};

const experiences: Experience[] = [
  {
    name: "Bean Trolley Cafe",
    role: "Social Media Intern",
    location: "Naples, FL",
    logo: "/logos/BeanCafe.png",
    description:
      "Collaborated with local brand to develop strategic content marketing\ncampaigns and enhance digital presence. Executed content creation,\nperformance analytics tracking, and community engagement initiatives to\ndrive brand awareness and customer retention.",
  },
  {
    name: "Delta Nu Zeta",
    role: "Social Media Committee",
    location: "Tallahassee, FL",
    logo: "/logos/DNZ.png",
    description:
      "Managed comprehensive social media strategy and brand messaging across\nmultiple platforms. Developed content calendars and executed targeted\ncampaigns that increased audience engagement and strengthened community\nconnections.",
  },
  {
    name: "The Finance Society",
    role: "VP of Marketing Shadow",
    location: "Tallahassee, FL",
    logo: "/logos/FSU_Finance.png",
    roundedLogo: true,
    description:
      "Spearheaded integrated marketing strategies and event coordination to\nenhance organizational visibility. Led cross-functional teams in executing\npromotional campaigns that effectively communicated the society's value\nproposition to target student demographics.",
  },
];

/****************************************************************************************
 * Small helper presentation components
 ****************************************************************************************/

// Reusable styled skill pill/card
const SkillCard: React.FC<{ label: string }> = ({ label }) => (
  <div className="skill-card bg-white p-4 text-center border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300 min-w-fit">
    <span className="text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
      {label}
    </span>
  </div>
);

// Encapsulate the TiltedCard + overlay content for experience entries
const ExperienceCard: React.FC<{ data: Experience }> = ({ data }) => (
  <TiltedCard
    captionText={data.name}
    containerHeight="400px"
    containerWidth="100%"
    imageHeight="350px"
    imageWidth="280px"
    rotateAmplitude={12}
    scaleOnHover={1.1}
    showMobileWarning={false}
    showTooltip={false}
    displayOverlayContent
    backgroundColor="#ffffff"
    overlayContent={
      <div className="experience-card-content">
        <div className="mb-0 flex justify-center">
          <img
            src={data.logo}
            alt={`${data.name} Logo`}
            className={`mb-0 object-contain ${
              data.roundedLogo ? "rounded-full" : ""
            }`}
            style={{ width: "90px", height: "90px" }}
          />
        </div>
        <h4 className="text-base font-bold text-black mb-1">{data.name}</h4>
        <h5 className="text-sm font-semibold text-gray-700 mb-1">
          {data.role}
        </h5>
        <p className="text-xs text-gray-600 mb-2">{data.location}</p>
        <p className="text-xs text-gray-800 leading-relaxed font-normal normal-case whitespace-pre-line">
          {data.description}
        </p>
      </div>
    }
  />
);

/****************************************************************************************
 * About component – main export
 ****************************************************************************************/

export default function About() {
  /*
   * Refs for section-level animations. We keep one ref per major block to drive
   * the staggered GSAP ScrollTrigger animations further below.
   */
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsToolsRef = useRef<HTMLDivElement>(null);

  /****************************************************************************************
   * GSAP / ScrollTrigger effects
   ****************************************************************************************/
  useEffect(() => {
    /*
     * Reset any locking styles potentially left over from the landing / Hero page.
     */
    const resetLayout = () => {
      // More comprehensive reset
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.height = "auto";
      document.documentElement.style.position = "static";

      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
      document.body.style.transform = "none";
      document.body.style.left = "auto";
      document.body.style.top = "auto";
      document.body.style.margin = "0";
      document.body.style.padding = "0";
    };

    resetLayout();
    // Multiple timeouts to ensure it takes effect
    setTimeout(resetLayout, 50);
    setTimeout(resetLayout, 200);
    setTimeout(resetLayout, 500);

    // Helper to DRY up the fade-in animations
    const fadeIn = (
      target: gsap.TweenTarget,
      delay = 0,
      trigger: gsap.DOMTarget
    ) =>
      gsap.fromTo(
        target,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          delay,
          scrollTrigger: {
            trigger,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

    fadeIn(titleRef.current!, 0, titleRef.current!);
    fadeIn(textRef.current!, 0.2, textRef.current!);
    fadeIn(skillsRef.current!, 0.4, skillsRef.current!);
    fadeIn(cameraRef.current!, 0.3, cameraRef.current!);
    fadeIn(bottomRef.current!, 0.5, bottomRef.current!);
    fadeIn(experienceRef.current!, 0.6, experienceRef.current!);
    fadeIn(skillsToolsRef.current!, 0.8, skillsToolsRef.current!);

    // Individual skill cards (cast to HTMLElement[] for proper typing)
    gsap.utils
      .toArray<HTMLElement>(".skill-card")
      .forEach((card, i) => fadeIn(card, 0.6 + i * 0.1, skillsRef.current!));

    // Experience cards
    gsap.utils
      .toArray<HTMLElement>(".experience-card")
      .forEach((card, i) =>
        fadeIn(card, 0.8 + i * 0.2, experienceRef.current!)
      );

    // Cleanup on unmount
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  /****************************************************************************************
   * Render
   ****************************************************************************************/
  return (
    <section
      id="about"
      className="w-full bg-[#e3e3db] py-20"
      style={{ overflow: "visible" }}
    >
      <div className="mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-2 lg:mb-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-akkurat text-black uppercase tracking-tight mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-black mx-auto" />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 p-2 items-start">
          {/* ——— Text + Skills column ——— */}
          <div className="space-y-8 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
            {/* Intro text */}
            <div
              ref={textRef}
              className="space-y-6 text-lg text-gray-800 leading-relaxed px-0 sm:px-0 max-w-prose mx-auto lg:mx-0"
            >
              <p className="text-black font-akkurat text-[1rem] uppercase leading-relaxed">
                Hi, I'm Julissa Rosas, a <strong>Marketing</strong> and{" "}
                <strong>Finance</strong> student at{" "}
                <span className="font-bold" style={{ color: "#782f40" }}>
                  Florida State University
                </span>{" "}
                with a passion for storytelling,{" "}
                <strong>brand development</strong>, and{" "}
                <strong>creative strategy</strong>.
              </p>
              <p className="text-black font-akkurat text-[1rem] uppercase leading-relaxed">
                My journey combines hands-on experience with small businesses
                and a strong academic foundation to help brands grow through
                thoughtful content, <strong>data-driven decisions</strong>, and
                a people-first approach. From internships in the U.S. and abroad
                to campus involvement and freelance projects, I'm constantly
                exploring new ways to connect ideas with impact.
              </p>
              <p className="text-black font-akkurat text-[1rem] uppercase leading-relaxed">
                When I'm not studying or working on brand projects, you'll find
                me exploring local coffee shops, planning my next adventure, or
                capturing moments from my travels. I believe every brand has a
                story to tell, and I'm here to help tell it.
              </p>
            </div>

            {/* Skills grid */}
            <div ref={skillsRef} className="pt-0">
              <h3 className="text-3xl font-bold text-black mb-0 uppercase tracking-wide">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                {skillList.map((skill) => (
                  <SkillCard key={skill} label={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* ——— Camera column ——— */}
          <div ref={cameraRef} className="flex items-center justify-center">
            <div
              className="relative w-full max-w-md mx-auto"
              style={{ height: "500px" }}
            >
              <Camera3D />
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div ref={bottomRef} className="mt-0 pt-4 border-t border-gray-400">
          <div className="text-center space-y-2">
            <p className="text-black font-semibold font-akkurat text-[0.7rem] uppercase">
              Currently based in Tallahassee, FL
            </p>
            <p className="text-gray-600 font-akkurat text-[0.7rem] uppercase">
              Open to <strong>internships</strong>,{" "}
              <strong>social media positions</strong>, and{" "}
              <strong>brand collaborations</strong>
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div ref={experienceRef} className="mt-4 pt-4 border-t border-gray-400">
          <div className="text-center mb-2">
            <h3 className="text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight mb-6">
              Experience
            </h3>
            <div className="w-24 h-1 bg-black mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {experiences.map((exp) => (
              <div key={exp.name} className="experience-card overflow-visible">
                <ExperienceCard data={exp} />
              </div>
            ))}
          </div>

          {/* Skills & Tools Section */}
          <div
            ref={skillsToolsRef}
            className="mt-12 pt-8 border-t border-gray-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Platforms */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-black uppercase tracking-wide mb-4 font-akkurat">
                  Platforms
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaInstagram className="text-lg text-pink-600" />
                    <span className="text-sm font-medium">Instagram</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaTiktok className="text-lg text-black" />
                    <span className="text-sm font-medium">TikTok</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaLinkedin className="text-lg text-blue-600" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-black uppercase tracking-wide mb-4 font-akkurat">
                  Content
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaCamera className="text-lg text-gray-600" />
                    <span className="text-sm font-medium">Photos</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaVideo className="text-lg text-red-600" />
                    <span className="text-sm font-medium">Videos</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <MdPhotoLibrary className="text-lg text-purple-600" />
                    <span className="text-sm font-medium">Stories</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaPlayCircle className="text-lg text-orange-600" />
                    <span className="text-sm font-medium">Reels</span>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-black uppercase tracking-wide mb-4 font-akkurat">
                  Tools
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <SiCanva className="text-lg text-blue-500" />
                    <span className="text-sm font-medium">Canva</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaCut className="text-lg text-green-600" />
                    <span className="text-sm font-medium">CapCut</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaEdit className="text-lg text-indigo-600" />
                    <span className="text-sm font-medium">Photo Editing</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <FaMicrosoft className="text-lg text-blue-700" />
                    <span className="text-sm font-medium">Microsoft 360</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <SiNikon className="text-lg text-yellow-600" />
                    <span className="text-sm font-medium">Nikon D 5600</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
