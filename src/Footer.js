import React, { PureComponent } from 'react';

/**
 * A Footer with address, contact info and social networks
 */
class Footer extends PureComponent {
  render() {
    return (
      <div className="aether-footer">
        <div className="aether-address">
          {this.props.address}
        </div>
        <div className="aether-contact">
          {this.props.contact}
        </div>
        <div className="aether-social">
        </div>
      </div>
    );
  }
}

export default Footer;
