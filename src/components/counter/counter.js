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
      <div className="">
        <div className="">
          <button className="" onClick={() => addProduct(-1)} disabled={qty === initial} /*esta funcion de HTML  deshabilita el boton al llegar al stock!!, es excelente */> 
            -
          </button>
          <span className="">{qty}</span>
          <button className="" onClick={() => addProduct(+1)}  disabled={qty === stock}> 
            +
          </button>
        </div>
  
        <button
          className=""
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