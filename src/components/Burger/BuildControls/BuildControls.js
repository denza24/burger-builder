import React from 'react'

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [

    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' }
];


const BuildControls = (props) => {

    return (


        <div className={classes.BuildControls}>
            <div>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></div>
            {controls.map(ctrl => {

                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    add={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            })}

            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.order}>
                ORDER NOW </button>

        </div>
    );


}
export default BuildControls;