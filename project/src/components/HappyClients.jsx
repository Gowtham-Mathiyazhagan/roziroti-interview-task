import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import img1 from "../assets/4.2-Lorely-Meza.jpg";
import img2 from "../assets/4.1-Kay-McCoy.jpg";
import img3 from "../assets/4.3-Desert-Born-Studios.jpg";
import img4 from "../assets/4.4-Lorely-Meza.jpg";
const HappyClients = () => {
  const [imgIndex, setimgIndex] = useState(0);
  let drag_range = 50;
  const dragx = useMotionValue(0);
  function onDragStart() {}
  function onDragEnd() {
    // console.log()
    let x = dragx.get();
    if (x <= -drag_range && imgIndex < 3) {
      setimgIndex((val) => val + 1);
    }
    else if (x >= drag_range && imgIndex > 0) {
      setimgIndex((val) => val - 1);
    }
  }
  function navBtn(){
    if (imgIndex < 3) {
      setimgIndex((val) => val + 1);
    }
    else if(imgIndex == 3){
   setimgIndex(0)
    }
  }
  return (
    <div className="happy-component">
      <div className="twofour">
        <div>2</div>
      </div>
      <div className="title">
        <h5>Our Happy Clients</h5>
        <p>
          Food may be our love language, but words of affirmation always make us
          ecstatic! Read what our happy clients have to say about how we made
          their day great.
        </p>
      </div>
      <div 
      style={{cursor : "grab"}}
      className="last-carousel">
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: 0,
          }}
          animate={{
            translateX: `-${imgIndex * 100}vw`,
          }}
          style={{
            x: dragx,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className="carousels"
          whileTap={{cursor :"grabbing"}}
        >
          {data.map((val, i) => {
            return (
              <div key={val.name}
              className="item">
                <div className="right">
                  <img src={val.img} alt="img" />
                </div>
                <div className="left">
                  <p>&#8220;{val.passage}&#8221;</p>
                  <div>
                    <p>{val.name}</p>
                    <div className="p">{val.job}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="carousel-nav">
        <div className="indicators">
          <span>
            {data.map((_, ind) => {
              return (
                <button
                  key={ind.toString()}
                  className={
                     imgIndex === ind ? "indicator indicator-block" : "indicator"
                  }
                  onClick={() => setimgIndex(ind)}
                ></button>
              );
            })}
          </span>
        </div>
        <div className="nav-btn" onClick={navBtn}>
            <span>NEXT TESTIMONIAL</span>
            <i className="bi bi-arrow-right"></i>
        </div>
        </div>
    </div>
  );
};

let data = [
  {
    img: img1,
    passage:
      "The staff was top-notch – professional, hardworking, and just a pleasure to work with.",
    name: "ROBIN",
    job: "Executive Assistant, Corelogic ",
  },
  {
    img: img2,
    passage:
      "I could not stop getting compliments on how deliciousthe food was! My [guests] still texted me the day after to tell me that the food was amazing.",
    name: "AMANDA & JETHRO",
    job: "The Colony House",
  },
  {
    img: img3,
    passage:
      "From the moment we inquired with the venue, through all the planning, execution, and clean-up of the wedding day, we had an amazing experience working with the team.",
    name: "KELLIE & PAUL",
    job: "Franciscan Gardens",
  },
  {
    img: img4,
    passage:
      "24 Carrots made our week-long event a stress-free and successful one!",
    name: "KIMBERLY",
    job: "Creston",
  },
];
export default HappyClients;

// NEXT TESTIMONIAL
