import { motion } from "framer-motion";
import { socialLinks } from "../constants/socialLinkData";

const Hero = () => {
  return (
    <section className="flex items-center min-h-screen pt-20" id="hero">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Hi, I'm
              <br />
              <span className="text-accent">Yash Shrivastava</span>
            </h1>
            <h2 className="mb-6 text-xl md:text-2xl text-textColor/80">
              Full-Stack Developer
            </h2>
            <div className="flex items-center gap-10">
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    download={
                      link.label === "Resume"
                        ? "Yash_Full_Stack_Resume.pdf"
                        : false
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 rounded-full text-textColor hover:text-accent social"
                    aria-label={link.label}
                  >
                    <span className="transition-all">{link.icon}</span>
                    <label className="text-2xl cursor-pointer">
                      {link.label}
                    </label>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <img
              src="/profile.webp"
              alt="Yash Shrivastava"
              className="object-cover w-64 h-64 mx-auto border-4 rounded-full md:w-96 md:h-96 border-accent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
