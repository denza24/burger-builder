import React from 'react'

import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingrString => {
            return <li key={ingrString}>
                <span style={{ textTransform: 'capitalize ' }}>{ingrString}:</span>
                {props.ingredients[ingrString]}</li>
        });

    return (

        <div className={classes.OrderSummary}>
            <h3>Your delicious burger with ingredients:</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType='Danger' click={props.orderCanceled}>CANCEL</Button>
            <Button btnType='Success' click={props.orderContinued}>CONTINUE</Button>
        </div>


    );



}

export default OrderSummary;