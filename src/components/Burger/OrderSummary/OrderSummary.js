import React from 'react';
import AuxHOC from '../../../hoc/AuxHOC'
import Button from '../../UI/Button/Button';
import {Success, Danger} from '../../UI/Button/Button.css';

// just wrapping around content so props.children.
const orderSummary = (props) => {
  // ingredients state is an object, not array. Transform into array:
  const ingredientSummary = Object.keys(props.ingredients)
   //returns array of keys from object: [salad, bacon, cheese, meat].
  // map ingredients state into list items.
    .map( ingrKey => {
      return  (
      <li key={ingrKey}>
        <span style ={{textTransform: 'capitalize'}}>
          {ingrKey}
        </span>:
        {props.ingredients[ingrKey]}
      </li>
    )
  })
  // don't know how {props.ingredients[ingrKey]} returns a number
  // will return <li> Salad: 1 </li> etc.
  return (
    <AuxHOC className="OrderSummary">
      <h3>Your Order</h3>
      <p>Your burger has:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout</p>
      <Button
        className="Danger"
        btntype="Danger"
        style={{ color: '#5C9210' }}
        clicked={props.purchaseCancelled}
        >CANCEL</Button>
      <Button
        style={{ color: '#944317' }}
        className="Success"
        btntype="Success"
        clicked={props.purchaseContinued}>CONTINUE</Button>
    </AuxHOC>
  )
};

export default orderSummary;
