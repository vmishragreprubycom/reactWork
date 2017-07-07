import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './FilterableProductTable';
import products from './products.js';

ReactDOM.render(
  <FilterableProductTable products={products} />, 
  document.getElementById('thinking-in-react')
);
