import React from 'react';
import classes from './Modal.css';
import AuxHOC from '../../../hoc/AuxHOC';
import Backdrop from '../Backdrop/Backdrop';
// just wrapping around OrderSummary so pass props.children down to OrderSummary.
//  modal happens when order button is clicked.

const modal = (props) => (
  <AuxHOC>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
      // slide modal off the screen if props.show (which is state.purchasable) is false
      >
      {props.children}
    </div>
</AuxHOC>
);

export default modal;
