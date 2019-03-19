import React, { Component } from 'react';
import AuxHOC from '../../hoc/AuxHOC';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//  name GLOBAL constants with caps:
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.5,
  meat: 1.5
}

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
    // this.state here since it's inside the constructor METHOD.
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 0,
      purchasable: false,     // true when burger has 1 ingredient
      purchasing: false,    // has order button been clicked
    }
  }

  updatePurchaseState(ingredients){
    // sum up all the values. Turn object into a new array of keys.
    // map to get the values. It takes each key and returns
    // return a new value and replace the old value.
    const sum = Object.keys(ingredients)        //VIDEO 160
    .map(ingrKey => {                           // ingrKey is salad, bacon etc
      return ingredients[ingrKey];              // now have an array of values
    })
    .reduce((sum, el) => {      // sum is the numeric value accessed thru ingrKey
      return sum + el;
    }, 0);      // reduce to turn into a single number, the sum of all ingredients.
  this.setState({purchasable: sum > 0})         // either true or false
  }

  // update added ingredients AND new price.
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    //  immutability: new JS object. Spread to distribute properties of old ingredients state into new object.
    const updatedIngredients = {
      ...this.state.ingredients
    };
    // set amount of each type to updated value.
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients);
  }

  // very similar to addition, but deducting price and updatedCount.
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    // return if there are no ingredients to remove; otherwise, error.
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    //  immutability: new JS object. Spread to distribute properties of old ingredients state into new object.
    const updatedIngredients = {
      ...this.state.ingredients
    };
    // set amount of each type to updated value.
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    })
    this.updatePurchaseState(updatedIngredients);
  }

  // need to use arrow funcs = () => {} to work, instead of funcName() {} style. Due to how THIS works.
  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler =() => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert("CONTINUE")
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for ( let key in disabledInfo) {      // loop thru state keys
      disabledInfo[key] = disabledInfo[key] <= 0
      // will return TRUE if key is 0 or less
    }
    return (
      <AuxHOC>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </AuxHOC>
    );
  }

}

export default BurgerBuilder;
