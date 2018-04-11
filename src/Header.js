import React, { PureComponent } from 'react';

/**
 * A Header with logo and a RouterSwitch menu
 */
class Header extends PureComponent {

  render() {
    return (
      <div className="aether-header">
        <img className="aether-logo"
          src={this.props.logo.url}
          alt={this.props.logo.alt}
        />
        <div className="aether-header">
          <h1 className="aether-header-text">{this.props.text}</h1>
        </div>
        <div className="aether-menu">
        </div>
      </div>
    );
  }
}

export default Header;
