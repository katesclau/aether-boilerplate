import React, { PureComponent } from 'react';

/**
 * A Footer with address, contact info and social networks
 */
const Footer = (props) => (
  <div className="footer teal-medium">
    <div className="address">
      {props.address}
    </div>
    <div className="contact">
      {props.contact}
    </div>
    <div className="social">
      {props.social && props.social.map(social => (
        <a href={social.link}>
          <i className={"fab " + props.social.icon} />
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
