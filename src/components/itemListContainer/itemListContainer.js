import React from 'react';
import ItemList from '../itemList/itemList';
import './itemListContainer.css'

const ItemListContainer = () => {
  return (
    <section className="">
      <h1 className="">Productos</h1>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;
