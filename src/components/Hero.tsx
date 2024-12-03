import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/YashShrivastava10",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/yash-shrivastava-7980911bb/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:shrivastavayas10@gmail.com",
      label: "Email",
    },
  ];

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
              Full Stack Developer
            </h2>
            <div className="flex items-center gap-10">
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    whileHover={{ scale: 1.1 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors text-textColor hover:text-accent"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
              <a
                href="/Yash_Resume_Full_Stack.pdf"
                download="Yash_Full_Stack_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 transition-colors rounded-md bg-accent text-primary hover:bg-accent/90"
              >
                <Download size={20} />
                Resume
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <img
              src="/profile.png"
              alt="Yash Shrivastava"
              loading="lazy"
              className="object-cover w-64 h-64 mx-auto border-4 rounded-full md:w-96 md:h-96 border-accent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
