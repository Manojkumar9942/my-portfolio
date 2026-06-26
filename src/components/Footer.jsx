import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Kondala ManojKumar
          </h2>

          <p className="text-gray-400 mt-2">
            Aspiring Software Engineer | Python Developer | React Enthusiast
          </p>
        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Manojkumar9942"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/manoj-kumar-513bb1355"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <div className="text-center mt-8 text-gray-500 flex justify-center items-center gap-2">
        Built with <FaHeart className="text-red-500" /> using React & Tailwind CSS
      </div>

      <div className="text-center text-gray-500 mt-3">
        © 2026 Kondala Manoj Kumar. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;