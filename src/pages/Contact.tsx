import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "julissarosas347@gmail.com",
      link: "mailto:julissarosas347@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      label: "LinkedIn",
      value: "@julissarosas",
      link: "https://www.linkedin.com/in/julissarosas/",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen transition-colors duration-300 py-20 md:py-32 relative overflow-hidden bg-[#e3e3db] flex items-center justify-center"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-20 md:w-40 h-20 md:h-40 rounded-full blur-3xl animate-pulse bg-slate-200/30"></div>
        <div
          className="absolute bottom-20 left-20 w-16 md:w-32 h-16 md:h-32 rounded-full blur-2xl animate-pulse bg-slate-200/20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-48 h-24 md:h-48 rounded-full blur-3xl animate-pulse bg-slate-200/10"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 w-full flex flex-col items-center justify-center">
        {/* Header */}
        <div
          className={`text-center mb-20 md:mb-28 ${
            isLoaded ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent mb-6 md:mb-8 tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
            Let&apos;s Connect
          </h2>
        </div>

        {/* Contact Info */}
        <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
          <div
            className={`space-y-12 md:space-y-16 w-full flex flex-col items-center ${
              isLoaded ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="text-center mb-16 md:mb-20">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-slate-900">
                Get in Touch
              </h3>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 px-4 text-slate-600 max-w-2xl mx-auto">
                I&apos;m passionate about helping brands and businesses build
                meaningful connections with their audience. Let&apos;s create
                something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 justify-center items-center w-full max-w-2xl mb-8 md:mb-12">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-8 md:p-10 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border group bg-white/80 border-slate-200/50 hover:scale-105 w-full sm:flex-1 sm:max-w-[300px] ${
                    isLoaded ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-16 md:w-18 h-16 md:h-18 rounded-full flex items-center justify-center text-2xl md:text-3xl mr-5 md:mr-7 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-slate-200/50 to-slate-300/50 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold mb-2 text-base md:text-lg text-slate-900">
                      {contact.label}
                    </div>
                    <div className="text-sm md:text-base group-hover:text-slate-800 transition-colors duration-300 text-slate-600">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-10 md:p-14 backdrop-blur-sm rounded-xl md:rounded-2xl border shadow-lg bg-white/60 border-slate-200/50 w-full max-w-4xl flex flex-col items-center mt-6 md:mt-8">
              <h4 className="text-xl md:text-2xl font-semibold mb-10 md:mb-12 text-center text-slate-900">
                Availability
              </h4>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center w-full max-w-3xl">
                <div className="flex items-center justify-center text-center">
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-slate-600">
                    Available for new projects
                  </span>
                </div>
                <div className="flex items-center justify-center text-center">
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-slate-600">
                    Quick response time
                  </span>
                </div>
                <div className="flex items-center justify-center text-center">
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-green-500 rounded-full mr-4 md:mr-5 flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-slate-600">
                    Flexible scheduling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer */}
      <div className="absolute bottom-4 left-0 right-0">
        <p className="text-xs text-center text-gray-400">
          © {new Date().getFullYear()} Julissa Rosas. All rights reserved.
        </p>
      </div>
    </section>
  );
}
