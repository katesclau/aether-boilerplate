import React, { PureComponent } from 'react';

/**
 * A Header with logo and a RouterSwitch menu
 */
const Header = (props) => (
  <div className="header teal-medium">
    <div>
      <img className="logo"
        src={props.logo.url}
        alt={props.logo.alt}
      />
    </div>
    <div>
      <h1 className="text">{props.text}</h1>
    </div>
    <div className="menu">
      <i className="fa fa-bars fa-3x"/>
    </div>
  </div>
);

export default Header;
