import React from 'react'

import BuildControls from './BuildControls/BuildControls';
import classes from './Builder.module.css';

export const Builder = (props) => {

    return (

        <div className={classes.Builder}>
            <p>Total price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <BuildControls
                addIngredient={props.addIngredient}
                removeIngredient={props.removeIngredient}
                disabled={props.disabled} />
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.order}>ORDER NOW</button>
        </div>
    )
}
