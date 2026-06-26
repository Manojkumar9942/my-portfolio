import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../assets/images/profile.jpeg";

const Hero = () => {
  return (
        <section
           id="home"
           className="min-h-screen bg-slate-950 text-white flex items-center pt-24"
        >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity:0,x:-60 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:1 }}
        >

          <p className="text-cyan-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Kondala
            <span className="text-cyan-400">
              {" "}ManojKumar
            </span>
          </h1>

          <div className="mt-8 text-3xl font-semibold text-gray-300">

            <TypeAnimation
              sequence={[
                "Python Developer",
                2000,
                "React Developer",
                2000,
                "AI/ML Enthusiast",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">

            Passionate about building modern web
            applications using Python, React and AI.
            I enjoy solving real-world problems and
            continuously learning new technologies.

          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="/resume/resume.pdf"
              className="bg-cyan-500 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500 transition"
            >
              Let's Contact
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/Manojkumar9942"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/manoj-kumar-513bb1355"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:manojkondala143@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity:0,x:60 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Manoj"
              className="relative w-[380px] h-[380px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_#06b6d4]"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;