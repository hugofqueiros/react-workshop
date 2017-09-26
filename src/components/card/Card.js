import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = ({ title, footerTitle, children }) => (
    <div className="Card">
        <div className="Card__title">
            {title}
        </div>
        <div className="Card__body">
            whatever
            {children}
        </div>
        <div className="Card__footer">
            {footerTitle}
        </div>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    footerTitle: PropTypes.string.isRequired
};

Card.defaultProps = {
    title: 'Card Title',
    footerTitle: 'footer title'
};

export default Card;
