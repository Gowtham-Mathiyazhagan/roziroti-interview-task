import React from 'react'
import img1 from '../assets/1.1-Lorely-Meza-1.jpg'
const Welcome = () => {
  return (
	<div className="welcome-container">
		<div className="welcome-left">
            <h6>WELCOME TO 24 CARROTS</h6>
			<h1>Remarkable <br /> Catering & <br /> Events</h1>
			<p>24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.</p>
		    <div className="button">GET IN TOUCH <i class="bi bi-arrow-right"></i></div>
		</div>
		<div className="welcome-right">
          <img src={img1} alt="img"/>
		</div>
	</div>
  )
}

export default Welcome