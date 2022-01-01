import { motion } from "framer-motion";
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
};

const nextVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", stiffness: 120 } },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
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

      {pizza.base && (
        <motion.div
          variants={nextVariants}
          className="next"
        >
          <Link to="/toppings">
            <motion.button
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              whileHover={{
                scale: 1.07,
                backgroundColor: "white",
                color: "rgba(100, 0, 123, 1)",
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
