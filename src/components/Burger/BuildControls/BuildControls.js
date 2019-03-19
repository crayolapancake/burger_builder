import React from 'react';
import BuildControlsCss from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

//  output many build controls: loop thru this array and render each object
// types should be same as types in switch statement (lower case)
const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
]

const buildControls = (props) => (
  <div className="BuildControls">
    <p>Price: <strong>£{props.price.toFixed(2)}</strong></p>  {/* fix to 2 decimal places */}
    {controls.map(ctrl => (
      // ctrl is each element in const controls
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={ () => props.ingredientAdded(ctrl.type)} //pass type as arg to addIngredientHandler to add
        removed={ () =>props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button
      className="OrderButton"
      disabled={!props.purchasable}
      onClick={props.ordered}>
        ORDER NOW
    </button>
  </div>
);

export default buildControls;
