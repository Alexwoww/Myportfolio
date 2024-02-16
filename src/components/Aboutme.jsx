import React from 'react';
import Symbol from './assets/Symbol.png';

function AboutMe() {
	return (
		<div>
			<h1 className="Abm" id="Aboutme">
				DISCOVER ME
			</h1>
			<hr className="Line10" />
			<div>
				<img className="Symbol" src={Symbol} alt="symbol" />
				<h2 className="Abm2">Hi, there! It's Alejandro</h2>
				<hr className="Line11" />
				<p className="AboutMe">
				Emerging Web Developer with two years of working experience in Creative Content and seven years in Retail.
				</p>
				<p className="AboutMe2">
				I have spent the last two years cultivating a vision for my career in this field, which was further solidified during a 10-week intensive web development bootcamp at LeWagon.
				</p>
				<p className="AboutMe3">
        I am actively seeking for a Full Stack or Front-end Developer position within a company that fosters collaborative teamwork and proactive learning, allowing me to continue honing my skills and contributing to the team's success.
				</p>
				<hr className="Line12" />
			<p className="Mysign">Alejandro Sanz Rodriguez</p>
			</div>
		</div>
	);
}

export default AboutMe;
