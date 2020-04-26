import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./styles/Layout";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Bookmarks from "./components/Bookmarks";
import Notifications from "./components/Notifications";
import Explore from "./components/Explore";
import Suggestion from "./components/Suggestion";

const AppRouter = () => {
	return (
		<Router>
			<Nav />
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/explore" component={Explore} />
					<Route path="/notifications" component={Notifications} />
					<Route path="/bookmarks" component={Bookmarks} />
					<Route path={`/:username`} component={Profile} />
					<Route path="/" component={Home} />
				</Switch>
				<Suggestion />
			</Layout>
		</Router>
	);
};

export default AppRouter;