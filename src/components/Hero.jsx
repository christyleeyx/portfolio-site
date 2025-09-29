import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

//Fade in from top
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

//Delaying each child of this division to delay animation by 0.1s
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.2 } },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }} //Delays the animation after navbar comes in
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Christy
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Creative Developer & Designer
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            I craft beautiful digital experiences that combine stunning designs
            with powerful functionality. Specialising in modern web applications
            and interactive user interfaces.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, deay: 0.4 }}
        >
          <div className="hero-card">
            <h2>About Me</h2>
            <p>
              I’m am a Web Developer cum UI/UX Designer aspiring to be a
              Software Engineer, Data Analyst and many more. <br />
              <br />I love puzzles and problems, finding and creating solutions
              that make a difference is exhilarating to me. I aim to always work
              towards delivering meaningful and lasting results.
            </p>
            <motion.div className="social-links" variants={staggerContainer}>
              <motion.a href="https://github/christyleeyx" target="_blank">
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a href="https://linkedin/christyleeyx" target="_blank">
                <i className="fab fa-linkedin"></i>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
