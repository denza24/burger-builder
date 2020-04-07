import React, { Component } from 'react';

import './Layout.css';
import Toolbar from './Toolbar/Toolbar';
import { SideDrawer } from './SideDrawer/SideDrawer';
import Aux from '../../hoc/Wrapper';

class Layout extends Component {

    state = {
        sideDrawerOpened: false
    }
    SideDrawerCloseHandler = () => {

        this.setState({ sideDrawerOpened: false })
    }
    SideDrawerToggleHandler = () => {

        this.setState((prevState) => {
            return { sideDrawerOpened: !prevState.sideDrawerOpened };
        });

    }
    render() {

        return (

            <Aux >
                <SideDrawer opened={this.state.sideDrawerOpened}
                    click={this.SideDrawerCloseHandler} />
                <Toolbar sideDrawerToggle={this.SideDrawerToggleHandler} />
                <main className='Content'>
                    {this.props.children}
                </main>

            </Aux>


        );
    }
}
export default Layout;