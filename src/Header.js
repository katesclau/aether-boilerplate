import React, { PureComponent } from 'react';

/**
 * A Header with logo and a RouterSwitch menu
 */
const Header = (props) => (
  <div className="aether-header">
    <img className="aether-logo"
      src={props.logo.url}
      alt={props.logo.alt}
    />
    <div className="aether-header">
      <h1 className="aether-header-text">{props.text}</h1>
    </div>
    <div className="aether-menu">
    </div>
  </div>
);

export default Header;
