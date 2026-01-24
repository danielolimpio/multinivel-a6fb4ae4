import { motion, AnimatePresence, type Transition, type Easing } from "framer-motion";
import { ReactNode } from "react";

interface QuizTransitionProps {
  children: ReactNode;
  keyProp: string;
}

const easeValues: Easing = [0.25, 0.46, 0.45, 0.94];

const pageVariants = {
  initial: {
    opacity: 0,
    x: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeValues,
    } as Transition,
  },
  exit: {
    opacity: 0,
    x: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: easeValues,
    } as Transition,
  },
};

export function QuizTransition({ children, keyProp }: QuizTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyProp}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Card animation variants for staggered children
export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

// Fade in animation for content sections
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Slide up animation
export const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
