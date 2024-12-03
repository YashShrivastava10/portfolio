import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-secondary" id="about">
      <div className="container px-8 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I’m a Full-Stack Developer with 3 years of experience in building
          dynamic web applications using React, Next.js, and Node.js. I’m
          passionate about creating seamless user experiences and reliable
          backend systems. With a strong focus on performance optimization and
          scalable architecture, I strive to deliver the best results for each
          project.
          <br />
          When I’m not coding, you’ll find me diving into multiplayer games,
          where I love strategizing with others to outsmart the competition. I’m
          also a huge tech enthusiast, always staying updated with the latest
          smartphone trends and innovations. Additionally, I love watching web
          series and anime, often getting inspired by captivating stories and
          character development.
          <br />
          I’m always excited to take on new challenges, contribute to impactful
          projects, and evolve as a developer. Let’s connect and create
          something great!
          <br />
          <br />
          Fun fact: At one point, I considered a job in Hyderabad just for its
          legendary biryani!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
