import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <div className="services" id="skills">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "white" }}>My Awesome</span>
        <span>skills</span>
        <a href={Resume} view>
          <button className="button s-button">View resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "21rem" }}
          whileInView={{ left: "0rem" ,top:"5rem"}}
          transition={transition}
        >
          <Card
            // emoji={HeartEmoji}
            heading={"Developer"}
            detail={"Html , Css , JavaScript , React JS"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "3rem" }}
          whileInView={{ left: "14rem" ,top:"12rem"}}
          transition={transition}
        >
          <Card
            // emoji={Glasses}
            heading={"Design"}
            detail={"Figma , Adobe Illustrator , After-effects "}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ left: "15rem" }}
          whileInView={{ left: "20rem",top:"-0.4rem" }}
          transition={transition}
        >
          <Card
            // emoji={Humble}
            heading={"Technical skills"}
            detail={
              "Data structure , Object Oriented Programming , Git , Computer Networks"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
