import React, { useContext } from "react";
import "./Intro.css";

import Github from "./Contactmodule/gitub";
import Linkedin from "./Contactmodule/linkedin";
import Insta from "./Contactmodule/insta";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import girl from "../../img/girl.jpg"


const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Josika</span>
          <span>
          A highly organized and hard-working individual looking for a responsible
            position to gain practical experience
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="f-icons">
          <Github color="white" size={"2rem"}/>
          <Insta color="white" size={"2rem"}/>
          <Linkedin color="white" size={"2rem"}/>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={girl} alt="" width="450rem" />
        

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          {/* <FloatinDiv img={crown} text1="Web" text2="Developer" /> */}
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" /> */}
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
