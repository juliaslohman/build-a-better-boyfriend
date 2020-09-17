import React from 'react';
import {Route, BrowserRouter as Router, Switch, withRouter} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import './universalStyle.scss';
import Ribbon from './ribbon/ribbon.js';
import Nav from './nav/nav.js';
import Footer from './footer/footer.js';
import ScrollToTop from './scrollToTop.js';
import HomePage from './home/home.js';
import About from './about/about.js';
import Pricing from './pricing/pricing.js';
import Playground from './playground/playground.js';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<Ribbon/>
					<Router basename={process.env.PUBLIC_URL}>
						<ScrollToTop>
							<Nav/>
							<FadeIn>
								<div className="content">
									<Route exact path={"/"} component={HomePage}/>
									<Route path={"/playground"} component={Playground}/>
									<Route path={"/about"} component={About}/>
									<Route path={"/pricing"} component={Pricing}/>
								</div>
							</FadeIn>
						</ScrollToTop>
					</Router>
				<Footer/>
			</div>
		);
	}
}

export default App;