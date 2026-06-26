import { motion } from "framer-motion";

const education = [
  {
    year: "2022 – 2026",
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Computer Science and Engineering",
    college: "Sri Venkateswara College of Engineering and Technology",
    score: "CGPA: 7.55",
  },
  {
    year: "2022",
    degree: "Senior Secondary (XII)",
    specialization: "",
    college: "Mother Teresa Junior College, Tekkali",
    score: "Percentage: 72.90%",
  },
  {
    year: "2020",
    degree: "Secondary (X)",
    specialization: "",
    college: "Mother Teresa High School, Tekkali",
    score: "Percentage: 96.66%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My <span className="text-cyan-400">Education</span>
        </motion.h2>

        <div className="space-y-8">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800 rounded-3xl p-8 border border-cyan-500 hover:scale-[1.02] transition"
            >

              <p className="text-cyan-400 font-semibold text-lg">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.degree}
              </h3>

              {item.specialization && (
                <p className="text-gray-300 mt-2">
                  {item.specialization}
                </p>
              )}

              <p className="text-gray-400 mt-2">
                {item.college}
              </p>

              <p className="text-cyan-300 mt-4 font-semibold">
                {item.score}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;