import React from 'react';
import './home.scss';

import wideImage from "./homepageImages/50scoupleWIDE.jpg";
import robotImage from "./homepageImages/retrofuturistrobotwoman.jpg";

class HomePage extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<div className="homepage-content">

                <div className="content-block welcome">
                    <h3>Welcome to Build a Better Boyfriend!</h3>
                    <p>
                        How we all wish to be in love!
                        And now we all can — with Build A Better Boyfriend from your friends at Replicant Robotics.
                        Leave it up to our service to create an ideal significant other for you.
                        Personalize their appearance, interests, and mannerisms to your taste in our <a href="/playground">playground</a>, and watch your lifetime partner take shape!
                    </p><p>
                        Our advanced robots can be used for more than just romantic partners, too.
                        Make a little friend for your little one, set your mom up with someone special, or create a challenging chess partner for yourself. The possibilities are endless!
                    </p><p>
                        Why waste time and energy dating around trying to find the one? You’ll see how much happier you are with your new man. Try it today!
                    </p>
                </div>

                <img src={wideImage} alt="You want this to be you. You will be happy. This is what you want." className="content-block content-image" id="banner-image"/>

                <div className="content-block custom">
                    <h3>Built to your taste and needs</h3>
                    <p className="error-text">
                        Text failed to load: errcode 409
                        <br/>
                        <br/>
                    </p>
                </div>

                <div className="content-block robots">
                    <img src={robotImage} alt="Our robots are advanced" className="content-image homepage-bg-image robots-image"/>
                    <div className="overlay"/>
                    <div className="block-textwrap">
                        <h3>Our Robots</h3>
                        <p>
                            Our humanlike robots are the result of decades of research and development.
                            They bring together the best of &#9633;rtifical intelligence and animatronic technologies.
                            They will love, learn, and grow with you, just like any human comp&#9633;nion would&#9633;
                        </p>
                    </div>
                </div>

                <div className="content-block pricing">
                    <h3>Pricing plans</h3>
                    <p>
                        Can you put a price on love? <a href={process.env.PUBLIC_URL + "/pricing"} className="error-text">Does it really matter#63; Does it really matter#63; Does it really matter#63; Does it really matter#63;  Does it really matter#63;</a>
                    </p>
                </div>

                <div className="content-block build">
                    <a href={process.env.PUBLIC_URL + "/playground"}>Start Building a Better Boyfriend!</a>
                </div>

            </div>
		);
	}
}

export default HomePage;