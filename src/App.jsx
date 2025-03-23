
import { useEffect, useState }  from "react";
import { About } from "../components/About";
import RecentProjects from "../components/RecentProjects";
import { FaDiscord, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const App = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    console.log(sections)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <main className="bg-gray-900 text-white flex lg:flex-row flex-col min-h-screen">
      {/* Sidebar */}
      <div className="lg:w-1/2 h-auto lg:h-screen lg:sticky top-0 flex flex-col p-12 md:p-20 lg:p-28 top-0 bg-gray-900">
        <h1 className="text-[50px] font-bold">Ugochukwu Victor</h1>
        <p className="text-3xl font-semibold text-slate-100 pt-3">
          Frontend web developer
        </p>
        <p className="pr-10 text-gray-400 text-xl pt-5">
          I build beautiful and responsive sites and applications for the web using the best technologies.
        </p>
        
        {/* Navigation */}
        <ul className="pt-16 lg:flex flex-col gap-6 text-lg hidden">
          <li
            className={`cursor-pointer ${
              activeSection === "about" ? "text-white font-semibold" : "text-gray-400"
            }`}
            onClick={() =>
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "projects-section" ? "text-white font-semibold" : "text-gray-400"
            }`}
            onClick={() =>
              document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
        </ul>

        <div className="flex-row flex items-center mt-12 lg:mt-20 space-x-6">
              <FaXTwitter size={24} className="text-gray-400 hover:text-teal-300" />
              <FaLinkedin size={24} className="text-gray-400 hover:text-teal-300" />
              <FaInstagram size={24} className="text-gray-400 hover:text-teal-300" />
              <FaDiscord size={24} className="text-gray-400 hover:text-teal-300" />
            </div>
      </div>

      {/* Content Sections */}
      <div className="lg:w-1/2 flex flex-col gap-16">
        <section id="about" className="h-auto lg:min-h-screen flex">
          <About />
        </section>
        <section id="projects-section" className="h-auto lg:min-h-screen flex items-center">
          <RecentProjects />
        </section>
        <p className=" p-12 md:p-20">UI developed with inspiration from <a href="https://brittanychiang.com/" target="_blank" className="text-teal-400">brittanychang.com</a></p>
      </div>
    </main>
  );
};

export default App;
