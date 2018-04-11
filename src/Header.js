import React, { PureComponent } from 'react';
import Menu from './Menu';

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
    <Menu menu={props.menu}/>
  </div>
);

export default Header;
