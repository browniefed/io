var React = require("react");
var RouteHandler = require("react-router").RouteHandler;

require("./style.css");

var Application = React.createClass({
	
	render: function() {
		return (
            <div className="application">
            	<h1>Beta Jama.io</h1>
            	<p>
            		This is a list of programs, tools, and apps built to extend Jama. This is currently an exclusive list, and requires review before being added to the list however in the future I hope this can change.
            	</p>
            	<p>	
            		Apps on this list should only authenticate against JamaLand. Further instructions on how to develop for this will be posted later.
            	</p>
            	<p>
            		To request information, an app to be listed, or a feature request/prototype request email <a href="mailto:jbrown@jamasoftware.com">jbrown@jamasoftware.com</a>
            	</p>
            	<div className="content">
                	<RouteHandler />
                </div>
            </div>
          )
	}
});
module.exports = Application;
