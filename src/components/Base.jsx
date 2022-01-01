import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      transition={{ type: "spring", delay: 0.5 }}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          transition={{ type: "spring", stiffness: 120 }}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
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
