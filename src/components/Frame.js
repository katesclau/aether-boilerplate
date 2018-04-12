import React from 'react';
import Header from './Header';
import PageBody from './PageBody';
import Footer from './Footer';
import content from '../static';

/**
 * A Full sized frame container
 */
class Frame extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="aether frame teal-light">
        <Header
          logo={content.logo}
          text={content.title}
          menu={content.menu}
        />
        <PageBody

        />
      </div>
    );
  }
}

export default Frame;
