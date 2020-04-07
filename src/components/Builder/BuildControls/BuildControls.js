import React from 'react'

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
import Aux from '../../../hoc/Wrapper';

const controls = [

    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' }
];


const BuildControls = (props) => {

    return (


        <div className={classes.BuildControls}>
            {controls.map(ctrl => {

                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    add={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            })}

        </div>

    );


}
export default BuildControls;