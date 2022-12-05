import React from 'react';
import './item.css';
import Counter from '../counter/counter';

const Item = ({ name, thumbnail, price, id, stock }) => { //tengo que ver como usar el Id
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };

  return (
    <article className="">
      <img className="" src={thumbnail} alt="" />

      <h3 className="">{name}</h3>
      <span className="">${price}</span>

      <Counter stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;