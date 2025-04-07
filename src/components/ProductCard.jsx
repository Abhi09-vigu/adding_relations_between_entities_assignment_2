import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card" style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <img src={product.image} alt={product.name} width="150" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Avg Rating:</strong> {product.avgRating.toFixed(1)} ⭐</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    avgRating: PropTypes.number,
    totalRatings: PropTypes.number
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;
