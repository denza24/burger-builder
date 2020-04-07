import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import { Builder } from '../../components/Builder/Builder';

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
        totalPrice: 3,
        purchasable: false,
        ordering: false
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
        this.UpdatePurchasableState(updatedIngr);

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

        this.UpdatePurchasableState(updatedIngr);

    }
    //purchasable = true when sum(ingredients) > 0
    UpdatePurchasableState = (ingredients) => {

        //uzimamo array keys-a
        let ingrArray = Object.keys(ingredients);
        //
        let sumArray = ingrArray.map(ingrString => {

            return ingredients[ingrString];
        });
        let sum = sumArray.reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({ purchasable: sum > 0 });

    }
    OrderHandler = () => {
        this.setState({ ordering: true });
    }
    OrderCancelHandler = () => {
        this.setState({ ordering: false });
    }
    OrderContinueHandler = () => {
        alert('Order continue!');
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
                <Backdrop show={this.state.ordering} click={this.OrderCancelHandler} />
                <Modal show={this.state.ordering}>
                    <OrderSummary ingredients={this.state.ingredients}
                        orderCanceled={this.OrderCancelHandler}
                        orderContinued={this.OrderContinueHandler}
                        totalPrice={this.state.totalPrice} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />

                <Builder
                    addIngredient={this.AddIngredientHandler}
                    removeIngredient={this.RemoveIngredientHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    order={this.OrderHandler} />

            </Wrapper>

        );

    }
};
export default BurgerBuilder;