import React from 'react'
import img1 from '../assets/1.1-Lorely-Meza-1.jpg'
import img2 from '../assets/1.2-Holly-Sigafoos-Photo.jpg'
import img3 from '../assets/1.3-Holly-Sigafoos-Photo.jpg'
import img4 from '../assets/1.4-Lorely-Meza.jpg'
const Welcome = () => {
  return (
	<div className="welcome-container">
		<div className="welcome-left">
            <h6>WELCOME TO 24 CARROTS</h6>
			<h1>Remarkable <br /> Catering & <br /> Events</h1>
			<p>24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.</p>
		    <div className="button">GET IN TOUCH <i className="bi bi-arrow-right"></i></div>
		</div>
		<div className="welcome-right">
		  <div className="carousel">
			{data.map((val,index)=>{
           <img  src={val.img} alt={val.alt} className='carousel-img'/> 
			})}
		  </div>
		  <div className="indicators">
		  <span>
			{data.map((_,index)=>{
                <button  className='indicator' onClick={null}></button>  
			})}
		  </span>
		  </div>
		</div>
		<img src={data[0].img} alt="" />
	</div>
  )
}
let data = [
	{img:img1,alt:"image 1"},
	{img:img2,alt:"image 2"},
	{img:img3,alt:"image 3"},
	{img:img4,alt:"image 4"}
]
export default Welcome