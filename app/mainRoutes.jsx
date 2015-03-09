var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


var Application = require("./Application"),
	List = require("./List/List");
// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
		<Route name="list" path="list" handler={List} />
		<DefaultRoute handler={List} />
	</Route>
);
