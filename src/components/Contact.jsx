import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 p-8 rounded-3xl border border-cyan-500">

            <div className="flex items-center gap-4 mb-6">
              <FaPhone className="text-cyan-400 text-2xl" />
              <span>7207279942</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <span>manojkondala143@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FaGithub className="text-cyan-400 text-2xl" />
              <a
                href="https://github.com/Manojkumar9942"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <a
                href="https://www.linkedin.com/in/manoj-kumar-513bb1355"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>

          </div>

          <div className="bg-slate-800 p-8 rounded-3xl border border-cyan-500 flex items-center justify-center">

            <a
              href="/resume/resume.pdf"
              className="bg-cyan-500 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              View Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;