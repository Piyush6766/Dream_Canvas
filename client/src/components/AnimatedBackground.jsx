import React, { useEffect, useRef, useState, useContext } from "react";
import * as THREE from "three";
import "./AnimatedBackground.css";
import { ThemeContext } from "../context/ThemeContext";

const AnimatedBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    let effect;
    import("vanta/dist/vanta.net.min").then((VANTA) => {
      if (vantaEffect) vantaEffect.destroy();
      effect = VANTA.default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: darkMode ? "white" : "black",
        backgroundColor: darkMode ? 0x000000 : 0xffffff,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 30.0,
        opacity: 0.2,
      });
      setVantaEffect(effect);
    });
    return () => {
      if (effect) effect.destroy();
    };
    // eslint-disable-next-line
  }, [darkMode]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default AnimatedBackground;