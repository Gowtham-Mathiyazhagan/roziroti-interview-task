import React from "react";
import img1 from "../assets/4.2-Lorely-Meza.jpg";
import img2 from "../assets/4.1-Kay-McCoy.jpg";
import img3 from "../assets/4.3-Desert-Born-Studios.jpg";
import img4 from "../assets/4.4-Lorely-Meza.jpg";
const HappyClients = () => {
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
      <div className="last-carousel">
		{/* <div className="carousels">
			{
			  data.map((val,i)=>{
                return <div key={val.name} className="item">
					<div className="right">
						<img src={val.img} alt="img" />
					</div>
					<div className="left">
				    <p>{val.passage}</p>
                    <h4>{val.name}</h4>
					<h6>{val.job}</h6>
					</div>
				</div>
			  })
			}
		</div> */}
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
    job: "Executive Assistant, Corelogic",
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
