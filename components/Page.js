import React, { Component } from 'react';
import Navbar from './Navbar';
import Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <Navbar />
        {this.props.children}
        <p>Footer Goes here</p>
      </>
    );
  }
}

export default Page;
