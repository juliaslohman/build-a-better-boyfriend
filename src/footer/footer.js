import React from 'react';
import './footer.scss';

class Footer extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<footer>

                <div className="footer-text">
                    Replicant Robotics
                    <br/>
                    Questions? Please contact us at &#x25a1;&#x25a1;&#x25a1;&#x25a1;@&#x25a1;&#x25a1;#x25a1;
                    <br/>
                    Site built by <a href="https://github.com/juliaslohman">Julia Lohman</a>
                    <br/>
                    Icons by <a href ="https://fontawesome.com/license">FontAwesome</a>
                    <br/>
                    &copy; 2&#x25a1;4&#x25a1; Repl&#x25a1;&#x25a1;ant Robotics. All Rights Reserved.
                </div>

            </footer>
		);
	}
}

export default Footer;