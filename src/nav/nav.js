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
                        <li><a href="/">Home</a></li>
                        <li><a href="/playground" alt="Experiment and build your perfect companion!">Playground</a></li>
                        <li><a href="/about" alt="does it really matter">About Us</a></li>
                        <li><a href="/pricing" alt="Can you put a price on love?'">Pricing Plans</a></li>
                    </Router>
                </ul>
            </nav>
		);
	}
}

export default Nav;