import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Camera3D from "../components/Camera3D";
import TiltedCard from "../components/TiltedCard";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure proper scrolling behavior for this component
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    document.body.style.position = "static";
    document.body.style.width = "auto";

    // Set initial states
    gsap.set(
      [
        titleRef.current,
        textRef.current,
        skillsRef.current,
        cameraRef.current,
        bottomRef.current,
        experienceRef.current,
      ],
      {
        y: 50,
        opacity: 0,
      }
    );

    // Title animation
    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Text content animation
    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Skills animation
    gsap.to(skillsRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.4,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Camera animation
    gsap.to(cameraRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.3,
      scrollTrigger: {
        trigger: cameraRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Bottom section animation
    gsap.to(bottomRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.5,
      scrollTrigger: {
        trigger: bottomRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Experience section animation
    gsap.to(experienceRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.6,
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate individual skill cards
    const skillCards = gsap.utils.toArray(".skill-card") as Element[];
    skillCards.forEach((card, index) => {
      gsap.set(card, { y: 30, opacity: 0 });
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.6 + index * 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate individual experience cards
    const experienceCards = gsap.utils.toArray(".experience-card") as Element[];
    experienceCards.forEach((card, index) => {
      gsap.set(card, { y: 30, opacity: 0 });
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.8 + index * 0.2,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="w-full bg-[#e3e3db] px-6 py-20"
      style={{ overflow: "visible" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold font-akkurat text-black uppercase tracking-tight mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Text Content */}
          <div className="space-y-8 pl-8 md:pl-12 lg:pl-16 ml-4 md:ml-6">
            <div
              ref={textRef}
              className="space-y-6 text-lg text-gray-800 leading-relaxed"
            >
              <p className="text-black font-akkurat text-sm uppercase leading-relaxed">
                Hi, I'm Julissa Rosas, a <strong>Marketing</strong> and{" "}
                <strong>Finance</strong> student at{" "}
                <span className="font-bold" style={{ color: "#782f40" }}>
                  Florida State University
                </span>{" "}
                with a passion for storytelling,{" "}
                <strong>brand development</strong>, and{" "}
                <strong>creative strategy</strong>.
              </p>
              <p className="text-black font-akkurat text-sm uppercase leading-relaxed">
                My journey combines hands-on experience with small businesses
                and a strong academic foundation to help brands grow through
                thoughtful content, <strong>data-driven decisions</strong>, and
                a people-first approach. From internships in the U.S. and abroad
                to campus involvement and freelance projects, I'm constantly
                exploring new ways to connect ideas with impact.
              </p>
              <p className="text-black font-akkurat text-sm uppercase leading-relaxed">
                When I'm not studying or working on brand projects, you'll find
                me exploring local coffee shops, planning my next adventure, or
                capturing moments from my travels. I believe every brand has a
                story to tell, and I'm here to help tell it.
              </p>
            </div>

            {/* Skills/Interests */}
            <div ref={skillsRef} className="pt-6">
              <h3 className="text-3xl font-bold text-black mb-8 uppercase tracking-wide">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="skill-card bg-white p-5 text-center border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                  <span className="text-base font-semibold uppercase tracking-wide">
                    Social Media
                  </span>
                </div>
                <div className="skill-card bg-white p-5 text-center border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                  <span className="text-base font-semibold uppercase tracking-wide">
                    Brand Strategy
                  </span>
                </div>
                <div className="skill-card bg-white p-5 text-center border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                  <span className="text-base font-semibold uppercase tracking-wide">
                    Content Creation
                  </span>
                </div>
                <div className="skill-card bg-white p-5 text-center border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                  <span className="text-base font-semibold uppercase tracking-wide">
                    Data Analysis
                  </span>
                </div>
                <div className="skill-card bg-white p-5 text-center border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                  <span className="text-base font-semibold uppercase tracking-wide">
                    Visual Design
                  </span>
                </div>
                <div className="skill-card bg-white p-5 text-center border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                  <span className="text-base font-semibold uppercase tracking-wide">
                    Digital Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Camera Model */}
          <div ref={cameraRef} className="flex items-center justify-center">
            <div
              className="relative w-full max-w-md mx-auto"
              style={{ height: "500px" }}
            >
              <Camera3D />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div ref={bottomRef} className="mt-24 pt-12 border-t border-gray-400">
          <div className="text-center space-y-4">
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
        <div
          ref={experienceRef}
          className="mt-24 pt-12 border-t border-gray-400"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-black uppercase tracking-tight mb-6">
              Experience
            </h3>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="experience-card overflow-visible">
              <TiltedCard
                captionText="Bean Trolley Cafe"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="350px"
                imageWidth="280px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                backgroundColor="#ffffff"
                overlayContent={
                  <div className="experience-card-content">
                    <div className="mb-3 flex justify-center">
                      <img
                        src="/logos/BeanCafe.png"
                        alt="Bean Trolley Cafe Logo"
                        className="mb-2 object-contain"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <h4 className="text-base font-bold text-black mb-1">
                      Bean Trolley Cafe
                    </h4>
                    <h5 className="text-sm font-semibold text-gray-700 mb-1">
                      Social Media Intern
                    </h5>
                    <p className="text-xs text-gray-600 mb-2">Naples, FL</p>
                    <p className="text-xs text-gray-800 leading-relaxed font-normal normal-case">
                      Collaborated with local brand to develop strategic content
                      marketing campaigns and enhance digital presence. Executed
                      content creation, performance analytics tracking, and
                      community engagement initiatives to drive brand awareness
                      and customer retention.
                    </p>
                  </div>
                }
              />
            </div>

            <div className="experience-card overflow-visible">
              <TiltedCard
                captionText="Delta Nu Zeta"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="350px"
                imageWidth="280px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                backgroundColor="#ffffff"
                overlayContent={
                  <div className="experience-card-content">
                    <div className="mb-3 flex justify-center">
                      <img
                        src="/logos/DNZ.png"
                        alt="Delta Nu Zeta Logo"
                        className="mb-2 object-contain"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <h4 className="text-base font-bold text-black mb-1">
                      Delta Nu Zeta
                    </h4>
                    <h5 className="text-sm font-semibold text-gray-700 mb-1">
                      Social Media Committee
                    </h5>
                    <p className="text-xs text-gray-600 mb-2">
                      Tallahassee, FL
                    </p>
                    <p className="text-xs text-gray-800 leading-relaxed font-normal normal-case">
                      Managed comprehensive social media strategy and brand
                      messaging across multiple platforms. Developed content
                      calendars and executed targeted campaigns that increased
                      audience engagement and strengthened community
                      connections.
                    </p>
                  </div>
                }
              />
            </div>

            <div className="experience-card overflow-visible">
              <TiltedCard
                captionText="The Finance Society"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="350px"
                imageWidth="280px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                backgroundColor="#ffffff"
                overlayContent={
                  <div className="experience-card-content">
                    <div className="mb-3 flex justify-center">
                      <img
                        src="/logos/FSU_Finance.png"
                        alt="FSU Finance Logo"
                        className="rounded-full mb-2 object-contain"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <h4 className="text-base font-bold text-black mb-1">
                      The Finance Society
                    </h4>
                    <h5 className="text-sm font-semibold text-gray-700 mb-1">
                      VP of Marketing Shadow
                    </h5>
                    <p className="text-xs text-gray-600 mb-2">
                      Tallahassee, FL
                    </p>
                    <p className="text-xs text-gray-800 leading-relaxed font-normal normal-case">
                      Spearheaded integrated marketing strategies and event
                      coordination to enhance organizational visibility. Led
                      cross-functional teams in executing promotional campaigns
                      that effectively communicated the society's value
                      proposition to target student demographics.
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
