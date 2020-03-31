import React from 'react';
import classes from './Backdrop.module.css';
import Button from '../Button/Button';

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.click}></div> : null
);

export default Backdrop;