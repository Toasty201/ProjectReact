import './counter.css' 
import React from 'react'
import { useState } from 'react';

const Counter = ({ onAdd, initial, stock }) => {
    //le paso valores del stock, en la app, esto posiblemente tenga que corregirlo y mejorarlo

    const [qty, setQty] = useState(initial);
  

    const addProduct = (num) => {
      setQty(qty + num);
    };
  
    return (
      <div className="count-container">
        <div className="count-container__contador">
          <button className="count-container__button" onClick={() => addProduct(-1)} disabled={qty === initial} /*esta funcion de HTML  deshabilita el boton al llegar al stock!!, es excelente */> 
            -
          </button>
          <span className="count-container__qty">{qty}</span>
          <button className="count-container__button" onClick={() => addProduct(+1)}  disabled={qty === stock}> 
            +
          </button>
        </div>
  
        <button
          className="button-primary"
          onClick={() => {
            onAdd(qty);
          }}
          disabled={stock === 0 ? true : null}
        >
          Añadir
        </button>
      </div>
    );
  };

export default Counter;