import { motion } from "framer-motion";

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

export const Skills = () => {
  return ();
};