import React from "react";
import { motion } from "framer-motion";
const Carousel = () => {
  return (
    <div className="carousels-container">
      <div className="main-carousel">
        <motion.div className="inner-carousel">
          {carouselData.map((val) => {
            return img;
          })}
        </motion.div>
      </div>
    </div>
  );
};

let carouselData = [
  {
    img: "../assets/1.-Overview-8.jpg",
    title: "The Richland",
    subTitle: "ORANGE",
    button: "EXPLORE VENUE",
  },
  {
    img: "../assets/2.-Overview-8.jpg",
    title: "Oak Creek Golf Club",
    subTitle: "IRVINE",
    button: "EXPLORE VENUE",
  },
  {
    img: "../assets/3.-Overview-8.jpg",
    title: "Rancho Las Lomas",
    subTitle: "SILVERADO",
    button: "EXPLORE VENUE",
  },
  {
    img: "../assets/4.-Overview-8.jpg",
    title: "Franciscan Garden",
    subTitle: "SAN JUAN CAPISTRANO",
    button: "EXPLORE VENUE",
  },
  {
    img: "../assets/5.-Overview-8.jpg",
    title: "The Colony House",
    subTitle: "ANAHEIM",
    button: "EXPLORE VENUE",
  },
  {
    img: "../assets/6.-Overview-8.jpg",
    title: "Ole Hanson Beach Club",
    subTitle: "SAN CLEMENTE",
    button: "EXPLORE VENUE",
  },
  {
    img: "../assets/7.-Overview-8.jpg",
    title: "AV Irvine",
    subTitle: "IRVINE",
    button: "EXPLORE VENUE",
  },
];

export default Carousel;
