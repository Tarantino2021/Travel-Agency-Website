import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/Shared__/header";
import Navigation from "./components/Shared__/navigation";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  const location = useLocation();

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", { duration: 0, css: { visibility: "visible" } });
  }, []);

  //scroll to top whenchanging router
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Header dimensions={dimensions} />
      <div className="App">
        <AnimatePresence
          location={useLocation}
          key={location.key}
          exitBeforeEnter
        >
          <Switch location={location} key={location.key}>
            <Route path="/approach" component={Approach} />
            <Route path="/services" component={Services} />
            <Route path="/about-us" component={About} />
            <Route exact path="/">
              <Home dimensions={dimensions} />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
      <Navigation />
    </>
  );
}

export default App;
