import React, { PureComponent } from 'react';

/**
 * A Footer with address, contact info and social networks
 */
const Footer = (props) => (
  <div className="aether-footer">
    <div className="aether-address">
      {props.address}
    </div>
    <div className="aether-contact">
      {props.contact}
    </div>
    <div className="aether-social">
    </div>
  </div>
);

export default Footer;
