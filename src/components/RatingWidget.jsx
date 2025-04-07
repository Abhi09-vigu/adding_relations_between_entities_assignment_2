import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHoveredRating(0);
    } else {
      alert('Please select a rating from 1 to 5 stars.');
    }
  };

  return (
    <div>
      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            style={{
              cursor: 'pointer',
              color: (hoveredRating || rating) >= value ? 'gold' : 'gray'
            }}
            onClick={() => handleStarClick(value)}
            onMouseEnter={() => setHoveredRating(value)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default RatingWidget;
