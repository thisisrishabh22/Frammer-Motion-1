import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const nextVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", stiffness: 120 } },
  exit: {
    x: ["0vw", "10vw", "-100vw"],
    transition: { type: "spring", stiffness: 120 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.07,
    backgroundColor: "white",
    color: "rgba(100, 0, 123, 1)",
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
      yoyo: Infinity,
    },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  document.title = "Add Base | Pizza Joint";

  return (
    <motion.div
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
      exit="exit"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={base}
              onClick={() => (!pizza.base ? addBase(base) : addBase(""))}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      <AnimatePresence>
        {pizza.base && (
          <motion.div
            variants={nextVariants}
            className="next"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link to="/toppings">
              <motion.button variants={buttonVariants} whileHover="hover">
                Next
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Base;
