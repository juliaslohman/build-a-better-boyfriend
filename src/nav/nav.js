import React from 'react';
import './nav.scss';
import { Link } from "react-router-dom";

class Nav extends React.Component {
	constructor (props) {
		super(props);
    }

	render() {
		return (
			<nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/playground"}>Playground</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/pricing"}>Pricing Plans</Link></li>
                </ul>
            </nav>
		);
	}
}

export default Nav;