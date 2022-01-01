import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

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

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5, when: "beforeChildren" }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
