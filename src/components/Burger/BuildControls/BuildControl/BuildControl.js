import React from 'react';
import BuildControlCss from './BuildControl.css';

const buildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button
      className="Less"
      onClick={props.removed}
      disabled={props.disabled}
      >Less
    </button>
    <button
      className="More"
      onClick={props.added}     // listens for a click then bubbles to parent
      >More
    </button>
  </div>
)

export default buildControl;
