import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-slate-800 rounded-3xl p-10 shadow-xl border border-cyan-500/20"
        >
          <p className="text-gray-300 text-lg leading-9">

            Hi, I'm <span className="text-cyan-400 font-semibold">Manoj</span>,
            a recent B.Tech graduate in Computer Science and Engineering from
            Sri Venkateshwara College of Engineering and Technology with a CGPA
            of <span className="text-cyan-400 font-semibold">7.55</span>.

            <br /><br />

            I have a strong foundation in Python and web development.
            During my final year, I developed a Machine Learning based
            Fake Review Detection System, which enhanced my problem-solving,
            teamwork, and software development skills.

            <br /><br />

            I am continuously improving my knowledge in Data Structures,
            Object-Oriented Programming, React, and AI/ML.
            I enjoy building modern web applications and learning
            new technologies.

            <br /><br />

            I am a quick learner, hardworking, and passionate about starting
            my career in the IT industry where I can contribute, grow,
            and continuously improve my technical skills.

          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;