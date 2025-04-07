import React, { useState } from 'react';
import ProductCard from './components/ProductCard';

const initialProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Noise-canceling over-ear headphones',
    image: 'https://via.placeholder.com/150',
    avgRating: 4.2,
    totalRatings: 5
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Fitness tracking and notifications',
    image: 'https://via.placeholder.com/150',
    avgRating: 3.5,
    totalRatings: 8
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        const newTotalRatings = product.totalRatings + 1;
        const newAvgRating =
          ((product.avgRating * product.totalRatings) + newRating) / newTotalRatings;

        return {
          ...product,
          avgRating: parseFloat(newAvgRating.toFixed(1)),
          totalRatings: newTotalRatings
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  return (
    <div className="app">
      <h1>Product Ratings</h1>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRatingSubmit={handleRatingSubmit}
        />
      ))}
    </div>
  );
}

export default App;
