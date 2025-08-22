import { motion, AnimatePresence } from "motion/react";

export const Alert = ({ type, text }) => {
  const alertVar = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 50, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-15 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVar}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`p-2 ${
            type === "danger" ? "bg-red-500" : "bg-royal"
          } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5`}
        >
          <p className="mr-2 text-left">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
