import React, { PureComponent } from 'react';

class PageBody extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="aether page-body teal-medium">
        {props.children}
      </div>
    );
  }

}

export default PageBody;
