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
        <div className="menu btn hover-grow" onClick={this.click}>
          <i className="fa fa-bars fa-2x" />
        </div>
        <div className="Popover-message Popover-message--top-right text-left p-4 mt-2 Box box-shadow-large">
          {this.props.menu && this.props.menu.map(item => (
            <a href={item.path} className="button" key={item.name}>
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
