import { motion } from "framer-motion";

const skills = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SQL",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale:1.05
              }}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-cyan-500 hover:border-cyan-300 transition"
            >

              <h3 className="text-2xl font-bold text-cyan-400">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;