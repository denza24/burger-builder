import React from 'react'

import classes from './Modal.module.css';

const Modal = (props) => {

    const style = {

        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
    };

    return (

        <div style={style} className={classes.Modal}>
            {props.children}
        </div>

    );
}

export default Modal;