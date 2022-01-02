import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: { when: "afterChildren", delay: 0.5 },
  },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { delay: 0.2 },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="modalDiv">
            <motion.div
              className="modal"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p>Want to make another pizza?</p>
              <Link to="/">
                <button onClick={() => setShowModal(false)}>Start Again</button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
