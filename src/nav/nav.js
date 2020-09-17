import React from 'react';
import './nav.scss';
import { BrowserRouter as Router } from "react-router-dom";

class Nav extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<nav>
                <ul>
                    <Router>
                        <li><a href={process.env.PUBLIC_URL + "/"}>Home</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/playground"} alt="Experiment and build your perfect companion!">Playground</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/about"} alt="does it really matter">About Us</a></li>
                        <li><a href={process.env.PUBLIC_URL + "/pricing"} alt="Can you put a price on love?'">Pricing Plans</a></li>
                    </Router>
                </ul>
            </nav>
		);
	}
}

export default Nav;