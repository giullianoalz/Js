import React from 'react';
import ProductCard from '../../Components/ProductCard';
import './search.css';

const Search = ({ searchResults }) => {
  return (
    <div className="search-page-container">
      {searchResults.length > 0 ? (
        <div className="search-results-grid">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="no-results-message">No se encontraron productos que coincidan con la búsqueda.</p>
      )}
    </div>
  );
};

export default Search;