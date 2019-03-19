import React from 'react';
import AuxHOC from '../../hoc/AuxHOC';
import LayoutCss from './Layout.css';      // import name can be anything
import Toolbar from '../Navigation/Toolbar/Toolbar';
// Content div is just wrapping around content props.children.

// props.children in main is BurgerBuilder file.
const layout = ( props ) => (
  <AuxHOC>
    <Toolbar />
    <div>SideDrawer</div>
    <main className="Content">
      {props.children}
    </main>
  </AuxHOC>
);

export default layout;
