import React from 'react'
import classes from './BuildControl.module.css';

const BuildControl = (props) => {

    return (

        <div className={classes.BuildControl}>
            <p className={classes.Label}>{props.label}</p>
            <button
                className={classes.Less}
                onClick={props.remove}
                disabled={props.disabled}>Less</button>
            <button
                className={classes.More}
                onClick={props.add}>More</button>
        </div>


    );


}
export default BuildControl;