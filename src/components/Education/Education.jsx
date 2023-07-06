import React, { useContext, useState } from "react";
import "./Education.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/profile1.jpg";
import Ecommerce from "../../img/profile2.jpg";
import MusicApp from "../../img/profile3.jpg";
import { themeContext } from "../../Context";


const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [ShowDescription_10, setShowDescription_10 ]=useState(false);
  const toggleDescription_10=()=>{
    setShowDescription_10(!ShowDescription_10)
  };
  const [ShowDescription_12, setShowDescription_12 ]=useState(false);
  const toggleDescription_12=()=>{
    setShowDescription_12(!ShowDescription_12)
  };
  const [ShowDescription_clg, setShowDescription_clg ]=useState(false);
  const toggleDescription_clg=()=>{
    setShowDescription_clg(!ShowDescription_clg)
  };



  return (
    <div className="portfolio" id="education">
      {/* heading */}
      <span style={{color: darkMode?'white': 'white'}}>My Educational</span>
      <span>Qualifications</span>

      {/* slider */}
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" onClick={toggleDescription_10} />
          {ShowDescription_10 && (
              <div className="description">
                <br></br>
                <div className="card1">
                <p  style={{ fontSize: 18 }} >
                School Name :<br></br>
                Bharathi Vidhayalaya Matric Hr. Sec. School <br></br>
                Location : <br></br>
                Gobichettipalayam , Erode<br></br>
                Percentage : <br></br>
                95.4%<br></br>
                Year of passing : <br></br>
                2018<br></br>
                </p>
                </div>
                <br></br>
              </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" onClick={toggleDescription_12}/>
          {ShowDescription_12 && (
              <div className="description">
                <br></br>
                <div className="card1">
                <p  style={{ fontSize: 18 }} >
                School Name :<br></br>
                Sri Saraswathi Vidhya Mandir Matric Hr. Sec. School <br></br>
                Location :<br></br>
                Karur<br></br>
                Percentage :<br></br>
                80%<br></br>
                Year of passing :<br></br>
                2020<br></br>
                </p>
                </div>
                <br></br>
              </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" onClick={toggleDescription_clg}/>
          {ShowDescription_clg && (
              <div className="description">
                <br></br>
                <div className="card1">
                <p  style={{ fontSize: 18 }} >
                College Name :<br></br>
                Kongu Engineering College <br></br>
                Location :<br></br>
                Perundurai , Erode<br></br>
                CGPA :<br></br>
                8.63(until 5th sem)<br></br>
                Year of passing :<br></br>
                2024<br></br>
                </p>
                </div>
                <br></br>
              </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
