import React from 'react';
import Backdrop from './backdrop.css';

// if true, return a div
const backdrop = (props) => (
  props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
);

export default backdrop;
