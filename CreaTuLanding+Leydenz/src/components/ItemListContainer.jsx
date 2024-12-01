import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="item-list-container">
      <h2>{mensaje}</h2>
      <p>Aquí se mostrarán los productos disponibles. En Construcción. </p>
    </div>
  );
};

export default ItemListContainer;
