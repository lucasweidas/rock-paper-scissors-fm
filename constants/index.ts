import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { opacity: 0, pointerEvents: 'none' },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
    pointerEvents: 'auto',
  },
};

export const fadeInMediumDelay: Variants = {
  initial: { opacity: 0, pointerEvents: 'none' },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeIn',
    },
    pointerEvents: 'auto',
  },
};

export const fadeInLargeDelay: Variants = {
  initial: { opacity: 0, pointerEvents: 'none' },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: 'easeIn',
    },
    pointerEvents: 'auto',
  },
};
