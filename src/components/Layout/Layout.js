import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import './Layout.css';

const Layout = (props) => (

    <Wrapper >
        <div>Toolbar, SideDrawer, BackDrop </div>
        <main className='Content'>
            {props.children}
        </main>

    </Wrapper>

);
export default Layout;