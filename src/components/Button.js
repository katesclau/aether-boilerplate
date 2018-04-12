import React from 'react';

const Button = (props) => (
  <button className={"btn " + props.className} onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;
