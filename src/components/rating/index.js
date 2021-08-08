import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Rating.propTypes = {
    rate: PropTypes.number
};

function Rating(props) {
    return (
        <>
            {Array.from({ length: 5 }, (_, index) => (
                <i key={index} className={`rating-star fa ${index < props.rate ? 'fa__star' : 'fa__star-o'}`}></i>
            ))}
        </>
    );
}

export default Rating;