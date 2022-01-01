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

const Toppings = ({ addTopping, pizza }) => {
  document.title = "Add Toppings | Pizza Joint";
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  return (
    <motion.div
      variants={containerVariants}
      initial={"hidden"}
      animate={"visible"}
      className="toppings container"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping}
              onClick={() => addTopping(topping)}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.toppings.length > 0 ? (
        <motion.div variants={nextVariants}>
          <Link to="/order">
            <motion.button variants={buttonVariants} whileHover="hover">
              Order
            </motion.button>
          </Link>
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default Toppings;
