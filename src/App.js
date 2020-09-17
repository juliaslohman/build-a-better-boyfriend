import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import FadeIn from 'react-fade-in';
import './universalStyle.scss';
import Ribbon from './ribbon/ribbon.js';
import Nav from './nav/nav.js';
import Footer from './footer/footer.js';
import ScrollToTop from './scrollToTop.js';
import HomePage from './home/home.js';
import History from './about/about.js';
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
				<Nav/>
				<div className="content">
					<FadeIn>
						<Router>
							<ScrollToTop>
								<Switch>
									<Route exact path="/">
										<HomePage/>
									</Route>
									<Route exact path="/pricing">
										<Pricing/>
									</Route>
									<Route exact path="/playground">
										<Playground/>
									</Route>
									<Route exact path="/about">
										<History/>
									</Route>
								</Switch>
							</ScrollToTop>
						</Router>
					</FadeIn>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;