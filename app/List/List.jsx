var React = require('react');

var List = React.createClass({

	render: function() {
		return (
			<div className="list">
				<h3>The List</h3>
				<ul>
					<li>Coming Soon...</li>
				</ul>
			</div>
		);
	}

});

module.exports = List;