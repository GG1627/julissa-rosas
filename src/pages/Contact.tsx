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
      className="min-h-screen transition-colors duration-300 py-16 md:py-20 relative overflow-hidden bg-[#e3e3db] flex items-center justify-center"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-16 md:w-24 h-16 md:h-24 rounded-full blur-3xl animate-pulse bg-slate-200/30"></div>
        <div
          className="absolute bottom-20 left-20 w-12 md:w-20 h-12 md:h-20 rounded-full blur-2xl animate-pulse bg-slate-200/20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 md:w-32 h-20 md:h-32 rounded-full blur-3xl animate-pulse bg-slate-200/10"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 w-full flex flex-col items-center justify-center">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 ${
            isLoaded ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700">
            Let&apos;s Connect
          </h2>
        </div>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto w-full flex flex-col items-center">
          <div
            className={`space-y-8 md:space-y-10 w-full flex flex-col items-center ${
              isLoaded ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="text-center mb-10 md:mb-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-slate-900">
                Get in Touch
              </h3>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 px-4 text-slate-600 max-w-xl mx-auto">
                I&apos;m passionate about helping brands and businesses build
                meaningful connections with their audience. Let&apos;s create
                something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center w-full max-w-xl mb-6 md:mb-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-5 md:p-6 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border group bg-white/80 border-slate-200/50 hover:scale-105 w-full sm:flex-1 sm:max-w-[260px] ${
                    isLoaded ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-full flex items-center justify-center text-lg md:text-xl mr-4 md:mr-5 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-slate-200/50 to-slate-300/50 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold mb-1 text-sm md:text-base text-slate-900">
                      {contact.label}
                    </div>
                    <div className="text-xs md:text-sm group-hover:text-slate-800 transition-colors duration-300 text-slate-600">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-6 md:p-8 backdrop-blur-sm rounded-lg md:rounded-xl border shadow-lg bg-white/60 border-slate-200/50 w-full max-w-3xl flex flex-col items-center mt-4 md:mt-6">
              <h4 className="text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center text-slate-900">
                Availability
              </h4>
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center w-full max-w-2xl">
                <div className="flex items-center justify-center text-center">
                  <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-green-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm text-slate-600">
                    Available for new projects
                  </span>
                </div>
                <div className="flex items-center justify-center text-center">
                  <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-green-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm text-slate-600">
                    Quick response time
                  </span>
                </div>
                <div className="flex items-center justify-center text-center">
                  <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-green-500 rounded-full mr-3 md:mr-4 flex-shrink-0"></div>
                  <span className="text-xs md:text-sm text-slate-600">
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
