import React, { useState } from "react";
import magicImg1 from "../assets/wedding-scroll-cropped.jpg";
import magicImg2 from "../assets/2.2-Social-Lorely-Meza.jpg";
import magicImg3 from "../assets/2.3-Corporate-Joel-Maus.jpg";
import magicImg4 from "../assets/2.4-Venues-Jenny-Quicksall.jpg";
const Magical = () => {
  const [magic, setMagic] = useState(2);
  return (
    <div className="magical-component">
      <div className="magical-left">
        {magical_data.map((val1, i) => {
          return (
            <img
              key={i.toString()}
              src={val1.img}
              alt={val1.alt}
              className={magic == i ? "magical-img show-magic" : "magical-img"}
            />
          );
        })}
      </div>
      <div className="magical-right">
        <h6 className="top-title">Making Every <br /> Experience <br /> Magical</h6>
        <div className="group-info">
          <div className="title">
            {magical_data.map((val2, i) => {
              return (
                <h5
                  key={val2.title}
                  onClick={() => setMagic(i)}
                  className={magic == i ? "event-title opacity" : "event-title"}
                >
                  {val2.title}
                </h5>
              );
            })}
          </div>
          <div className="details-info">
            {magical_data.map((val3, i) => {
              return (
                <div className={magic == i ? "sub-title show-magic" : "sub-title"}>
                  <div>{val3.subtitle}</div>
                  <p>{val3.para}</p>
                  <button>{val3.button}<i className="bi bi-arrow-right"></i></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
let magical_data = [
  {
    img: magicImg1,
    alt: "image 1",
    title: "Weddings",
    subtitle: "EXCEPTIONAL WEDDINGS",
    para: "The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.",
    button: "LEARN MORE",
  },
  {
    img: magicImg2,
    alt: "image 2",
    title: "Social",
    subtitle: "INCOMPARABLE SOCIAL EVENTS",
    para: "We sweat the small stuff, so you don’t have to. For all of life’s special occasions we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests!",
    button: "LEARN MORE",
  },
  {
    img: magicImg3,
    alt: "image 3",
    title: "Corporate",
    subtitle: "ONE-OF-A-KIND CORPORATE EVENTS",
    para: "Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.",
    button: "LEARN MORE",
  },
  {
    img: magicImg4,
    alt: "image 4",
    title: "Venues",
    subtitle: "EXCLUSIVE SOCIAL VENUES",
    para: "We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers  easy access with personalized service at Southern California’s premier locations.",
    button: "LEARN MORE",
  },
];

export default Magical;
