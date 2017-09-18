import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

import './Header.css';

// I could have done (props) and then inside h2 ref the props.msg
const Header = ({ msg }) => (
	<div className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h2>{msg}</h2>
	</div>
);

Header.propTypes = {
    msg: PropTypes.string.isRequired
};

Header.defaultProps = {
    msg: 'HomeAway Welcome'
};

export default Header;
