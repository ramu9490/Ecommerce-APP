import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { myDatabase } from './Firebase';

function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchResults = async () => {
      const querySnapshot = await myDatabase.collection('Products')
        .where('title', '==', searchQuery)
        .get();

      const data = querySnapshot.docs.map(doc => doc.data());
      setResults(data);
    };

    fetchResults();
  }, [searchQuery]);

  return (
    <div className="container mt-5">
      <h2>Search Results for "{searchQuery}"</h2>
      {results.length > 0 ? (
        <div className="row">
          {results.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-price">{product.price}</p>
                  <a href={`/product/${product.id}`} className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching products found</p>
      )}
    </div>
  );
}

export default SearchResults;
