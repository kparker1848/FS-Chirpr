import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from '../server/views/Admin';
import Compose from '../server/views/Compose';
import Details from '../server/views/Details';
import Home from '../server/views/Home';
import Navbar from './Components/Navbar';

const Template: React.FC<TemplateProps> = props => {

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/details/:chirpid">
					<Details />
				</Route>
				<Route exact path="/admin/:chirpid">
					<Admin />
				</Route>
				<Route exact path="/compose">
					<Compose />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

interface TemplateProps { }

export default Template;