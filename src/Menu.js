import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  click() {
    console.log("clicked");
  }

  render() {
    return (
      <div>
        <div className="menu" onClick={this.click}>
          <i className="fa fa-bars fa-3x" />
        </div>
        <div className="modal">
          {this.props.menu && this.props.menu.map(item => (
            <a href={item.path} className="button">
              {item.icon ? <i className={"fa " + item.icon} /> : ""}
              item.name
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
