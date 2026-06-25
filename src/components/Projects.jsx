import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built using React, Tailwind CSS, and Framer Motion to showcase my skills, projects, education, and contact information.",
    tech: "React • Tailwind CSS • Framer Motion",
  },
  {
    title: "Machine Learning Based Fake Review Detection System",
    description:
      "A machine learning application that identifies fake product reviews using Natural Language Processing and classification algorithms.",
    tech: "Python • Machine Learning • NLP • Scikit-learn",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-slate-800 rounded-3xl p-8 border border-cyan-500 shadow-lg"
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {project.description}
              </p>

              <p className="mt-6 text-cyan-300 font-semibold">
                {project.tech}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;