import React from 'react'

import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Wrapper';

export const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Open];
    if (!props.opened) {
        attachedClasses = [classes.SideDrawer, classes.Close];
    }
    return (

        <Aux>
            <Backdrop show={props.opened} click={props.click} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>

        </Aux>

    );



}
