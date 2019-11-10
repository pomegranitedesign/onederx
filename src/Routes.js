import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import { Main, Settings, Logout } from "./Pages";

const Routes = props => {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/settings" component={Settings} />
				<Route path="/logout" component={Logout} />
			</Switch>
		</Layout>
	);
};

export default Routes;
