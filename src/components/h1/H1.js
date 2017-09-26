import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ title }) => (
    <h1>{title}</h1>
);

H1.propTypes = {
    title: PropTypes.string.isRequired
};

H1.defaultProps = {
    title: 'HomeAway Welcome'
};

export default H1;
