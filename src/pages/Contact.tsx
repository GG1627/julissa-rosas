import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
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

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-[#e3e3db] px-6 py-12 relative"
    >
      <div className="w-full max-w-3xl rounded-2xl border border-none p-8 md:p-12">
        {/* Header */}
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            I'm always excited to chat about new projects, creative ideas, or
            collaborations. Feel free to reach out through any of the channels
            below—let's make something great together.
          </p>
        </header>

        {/* Contact Methods */}
        <ul className="grid gap-6 sm:grid-cols-2 mb-6">
          {contactInfo.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-200/70 hover:border-slate-300 group"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl group-hover:scale-105 transition-transform">
                  {contact.icon}
                </span>
                <div className="truncate">
                  <p className="font-semibold text-slate-800 leading-none">
                    {contact.label}
                  </p>
                  <p className="text-sm text-slate-600 truncate">
                    {contact.value}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Availability */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center bg-white rounded-xl p-6 border border-slate-200/70">
          <AvailabilityItem text="Currently taking on new freelance projects" />
          <AvailabilityItem text="Quick to respond (within 24h)" />
          <AvailabilityItem text="Flexible with scheduling" />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Julissa Rosas. All rights reserved.
      </footer>
    </section>
  );
}

function AvailabilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-slate-600 text-sm">
      <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
      {text}
    </div>
  );
}
