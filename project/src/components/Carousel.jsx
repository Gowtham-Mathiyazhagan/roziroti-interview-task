import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/1.-Overview-8.jpg";
import img2 from "../assets/2.-Overview-8.jpg";
import img3 from "../assets/3.-Overview-8.jpg";
import img4 from "../assets/4.-Overview-8.jpg";
import img5 from "../assets/5.-Overview-8.jpg";
import img6 from "../assets/6.-Overview-8.jpg";
import img7 from "../assets/7.-Overview-8.jpg";
const Carousel = () => {
  return (
    <motion.div className="carousels-container">
      <motion.div className="main-carousel">
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -2800,
          }}
          className="inner-carousel"
        >
          {carouselData.map((val) => {
            return (
              <>
                <div
                  className="item"
                  style={{
                    backgroundImage: `url(${val.img})`,
                    backgroundSize: "500px 500px",
                  }}
                >
                  <div className="hover-items">
                    <div className="button">
                      {val.button}
                      <i className="bi bi-arrow-right"></i>
                    </div>
                    <div className="titles">
                      <h5>{val.title}</h5>
                      <hr />
                      <h6>{val.subTitle}</h6>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

let carouselData = [
  {
    img: img1,
    title: "The Richland",
    subTitle: "ORANGE",
    button: "EXPLORE VENUE",
  },
  {
    img: img2,
    title: "Oak Creek Golf Club",
    subTitle: "IRVINE",
    button: "EXPLORE VENUE",
  },
  {
    img: img3,
    title: "Rancho Las Lomas",
    subTitle: "SILVERADO",
    button: "EXPLORE VENUE",
  },
  {
    img: img4,
    title: "Franciscan Garden",
    subTitle: "SAN JUAN CAPISTRANO",
    button: "EXPLORE VENUE",
  },
  {
    img: img5,
    title: "The Colony House",
    subTitle: "ANAHEIM",
    button: "EXPLORE VENUE",
  },
  {
    img: img6,
    title: "Ole Hanson Beach Club",
    subTitle: "SAN CLEMENTE",
    button: "EXPLORE VENUE",
  },
  {
    img: img7,
    title: "AV Irvine",
    subTitle: "IRVINE",
    button: "EXPLORE VENUE",
  },
];

export default Carousel;
