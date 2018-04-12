import React, { Component } from 'react';
import Modal from './Modal';
import Button from './Button';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  click() {
    console.log("clicked");
    this._modal && this._modal.toggle();
  }

  render() {
    return (
      <div>
        <Button className="hover-grow" onClick={this.click.bind(this)}>
          <i className="fa fa-bars fa-2x" />
        </Button>
        <Modal
          ref={(modal) => { console.log('this is it'); this._modal = modal; }}
          type="top-right">
          {this.props.menu ? (
            <nav className="menu">
              {this.props.menu && this.props.menu.map(item => (
                <a href={item.path} className="menu-item" key={item.name}>
                  {item.icon ? <i className={"fa " + item.icon} /> : ""}
                  item.name
                </a>
              ))}
            </nav>
          ) : null }
        </Modal>
      </div>
    );
  }
}

export default Menu;
