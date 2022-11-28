import './cartWidget.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function cartWidget(){
    return(
        <div className="cart-widget">
        <FontAwesomeIcon icon="fa-regular fa-cart-shopping" size="2x" color="white" /> */
        <div className="qty-display">2</div>
      </div>
    );

}

export default cartWidget;
