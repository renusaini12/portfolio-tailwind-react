import React from "react";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

const projects = [
  {
    title: "Cloud Platform",
    description:
      "Scalable infrastructure management with real-time monitoring and automated scaling.",
    tech: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "AI-powered analytics platform providing insights with beautiful dashboards and reports.",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
  },
  {
    title: "E-Commerce Web App",
    description:
      "Modern e-commerce platform with shopping cart, payment gateway and user dashboard.",
    tech: ["React", "Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Real-Time Chat App",
    description:
      "Real-time chat application with WebSocket integration and group chat support.",
    tech: ["React", "Node.js", "Socket.io", "Firebase"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:text-blue-400 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
