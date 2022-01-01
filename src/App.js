import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza((prev) => {
      return { ...prev, base };
    });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/">
            <Route index element={<Home />} />
            <Route
              path="/base"
              element={<Base addBase={addBase} pizza={pizza} />}
            />
            <Route
              path="/toppings"
              element={<Toppings addTopping={addTopping} pizza={pizza} />}
            />
            <Route path="order" element={<Order pizza={pizza} />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
