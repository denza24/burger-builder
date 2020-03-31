import React from 'react'

import Aux from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingrString => {
            return <li key={ingrString}>
                <span style={{ fontStyle: 'capitalize ' }}>{ingrString}:</span>
                {props.ingredients[ingrString]}</li>
        });

    return (

        <Aux>
            <h3>Your delicious burger with ingredients:</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <Button btnType='Danger' click={props.orderCanceled}>CANCEL</Button>
            <Button btnType='Success' click={props.orderContinued}>CONTINUE</Button>
        </Aux>

    );



}

export default OrderSummary;