import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      classes: this.getClassesFromType(props)
    };
    // this.open = this.open.bind(this);
    // this.close = this.close.bind(this);
    // this.toggle = this.toggle.bind(this);
  }

  getClassesFromType(props) {
    let classes = {};
    switch (props.type) {
      case 'top-right':
        classes.innerClass = "Popover-message Popover-message--top-right text-left p-2 mt-2 Box box-shadow-large";
        classes.outerClass = "Popover right-0";
        break;
      case 'top-left':
        classes.innerClass = "Popover-message Popover-message--top-left p-2 mt-2 Box box-shadow-large";
        classes.outerClass = "Popover";
        break;
    }
    return classes;
  }

  isOpened() {
    return this.state.opened;
  }

  open() {
    console.log('open');
    this.setState({ opened: true });
  }

  close() {
    console.log('close');
    this.setState({ opened: false });
  }

  toggle() {
    console.log('toggle');
    !this.state.opened ?
      this.open() : this.close();
  }

  render() {
    return (
      <div className={this.state.classes.outerClass + (this.isOpened() ? ' modal' : ' hidden')}>
        <div className={this.state.classes.innerClass}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

Modal.defaultProps = {
  type: 'top-center',
  innerClass: 'Popover-message text-left p-2 mt-2 mx-auto Box box-shadow-large',
  outerClass: 'Popover right-0 left-0'
};

export default Modal;
