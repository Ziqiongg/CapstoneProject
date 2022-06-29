import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from './ProductDetail';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});