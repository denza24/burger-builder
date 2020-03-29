import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {

    salad: 0.5,
    meat: 1.3,
    cheese: 0.7,
    bacon: 0.7

};
class BurgerBuilder extends Component {

    state = {

        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0

        },
        totalPrice: 3
    };

    AddIngredientHandler = (type) => {

        let ingrCount = this.state.ingredients[type] + 1;
        //kopiramo sastojke
        let updatedIngr = {
            ...this.state.ingredients
        };
        //mijenjamo count odabranog
        updatedIngr[type] = ingrCount;

        //updateujemo cijenu
        let newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];

        //setState
        this.setState({ totalPrice: newPrice, ingredients: updatedIngr });
    }
    RemoveIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        //kopiramo sastojke
        let updatedIngr = {
            ...this.state.ingredients
        };
        //mijenjamo count odabranog
        updatedIngr[type] = oldCount - 1;

        //updateujemo cijenu
        let newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];

        //setState
        this.setState({ totalPrice: newPrice, ingredients: updatedIngr });



    }
    render() {

        let disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in this.state.ingredients) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (

            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.AddIngredientHandler}
                    removeIngredient={this.RemoveIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice} />

            </Wrapper>

        );

    }
};
export default BurgerBuilder;