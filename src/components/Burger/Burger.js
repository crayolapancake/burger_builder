import React from 'react';
import burgerCss from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
// burger is a wrapper around all of the Ingredients.

// since state.ingredients is an OBJECT, we can't loop or map thru it:
// First TRANSFORM into an ARRAY of the VALUES of state.ingredients:
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  // Object.keys extracts KEYS ONLY of an object and puts them into an array.
  // transformed array then is ["salad", "bacon", "cheese", "meat"].
  .map(ingrKey => {
    // spread a new array. ARRAY method with(x) amount of empty spaces. Only length of array matters here.
    // transform string value into an array with as many elements as we have
    // ingredients (it number in value) for a given ingredient.
    // so 2 cheeses would result in an array with a length of two.
    return [...Array(props.ingredients[ingrKey])].map((_, i) => {
        // spread into a NEW array with (x) amount of empty spaces.
        // (props.ingredients[ingrKey]) length of array is amount of any given ingredient (VALUE)
        // third MAP only needs index:
        // used underscore as first arg cause only LENGTH of array matters here, not the array contents.
      return <BurgerIngredient key={ingrKey + i} type={ingrKey}>hello{ingrKey}</BurgerIngredient>;
      // ingr key is "salad" etc, and i is index
      // so we map the object into an array of ingredients in the end.
      // transformedIngredientsArray is now an array of arrays.
    });
  })
  // reduce to flatten the array of arrays: it takes a previous value and a current value in args to function. ALso accepts an initial value, here an empty array.
  // reduce callback is executed for every element (in second .map)
  .reduce((arr, el) => {
    return arr.concat(el)
    // return updated values which are stored in first argument "arr"
  }, []);
    // now returns an array of objects.
    if (transformedIngredients == 0) {
      transformedIngredients = <p>Please start adding ingredients.</p>
    }
  // console.log("array", transformedIngredients);


  // transfor an array of key/value pairs into an array of burger ingreients.

// outputs whatever is saved in transformedIngredients.
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
