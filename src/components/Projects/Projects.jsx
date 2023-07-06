import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/project1.png";
import profilePic2 from "../../img/project2.png";
import profilePic3 from "../../img/project3.png";
import profilePic4 from "../../img/project4.jpg";
import profilePic5 from "../../img/project5.png";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      title:
        "Thrift store",
      demo: 0,
      review:"A thrift store is a retail establishment that sells secondhand or used goods, typically at significantly lower prices than new items. These stores offer a wide range of products, including clothing, furniture, household items, books, electronics, and more. The items sold in thrift stores are typically donated by individuals or businesses and are then sorted, cleaned, and organized for resale. Thrift stores are known for their affordability and can be a treasure trove for budget-conscious shoppers or those looking for unique and vintage items. "
      },
    {
      img: profilePic2,
      title:
        "To-do List",
      demo: 0,
      review: "A to-do list using React is a simple web application that allows users to create and manage tasks or items they need to accomplish. React, a popular JavaScript library for building user interfaces, provides a flexible and efficient way to create interactive components for this purpose.In a React to-do list, users can add new tasks, mark tasks as completed, and delete tasks they no longer need. The list of tasks is typically displayed in a clean and organized manner, with each task represented by a checkbox or a button to indicate completion."
      },
    {
      img: profilePic3,
      title:
        "React Calculator",
        link:"https://rcalculator.onrender.com",
      demo: 1,
      review: "A calculator using React is a web application that emulates the functionality of a traditional handheld calculator. React, a JavaScript library for building user interfaces, provides an efficient and dynamic way to create interactive calculator components."
    },
    {
      img: profilePic4,
      title:
        "E-commerce Website",
      demo: 0,
      review: "An e-commerce website using React is a robust online platform that enables businesses to sell products or services to customers over the internet. React, a popular JavaScript library for building user interfaces, provides a powerful framework for creating dynamic and interactive components for the e-commerce experience."
    },
    {
      img: profilePic5,
      title:
        "Portfolio",
      demo: 0,
      review: "In a React portfolio website, users can navigate through different sections to explore the individual's projects, experience, education, and other relevant information. The website typically includes a homepage or an introduction section that provides a brief overview of the individual's background and expertise."

    },
    
  ];

  return (
    <div className="t-wrapper" id="projects">
      <div className="t-heading">
        <span>My </span>
        <span>Projects </span>
        <span>....</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1} 
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span style={{fontSize: 34}}>{client.title}</span>
                <img src={client.img} alt="" />
                <span style={{fontSize: 14}}>{client.review}</span>
                <a href={client.link}>
                {client.demo === 1? <button className="button n-button">DEMO</button>: null }
                
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
