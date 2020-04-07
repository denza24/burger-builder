import React from 'react'

import classes from './Toolbar.module.css';
import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../../Layout/Navigation/NavigationItems/NavigationItems';


const Toolbar = (props) => (

    <header className={classes.Toolbar}>
        <div onClick={props.sideDrawerToggle} className={classes.ToggleButton}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>


);
export default Toolbar;