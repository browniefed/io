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
            		Apps on this list should all authenticate against JamaLand. Further instructions on how to develop for this will be posted later.
            	</p>
            	<div className="content">
                	<RouteHandler />
                </div>
            </div>
          )
	}
});
module.exports = Application;
