import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

const HelloMessage = React.createClass({
	render: function() {
		return <div>Hello {this.props.name}</div>;
	}
});

const mountNode = document.getElementById('root');
ReactDOM.render(<HelloMessage name="World" />, mountNode);
