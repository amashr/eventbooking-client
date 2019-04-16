import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Meta from './Meta';
import Navbar from './Navbar';

const theme = {
  blueCool3: '#3E4C59',
  blueCool10: '#F5F7FA'
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    color: ${props => props.theme.blueCool3};
    background: ${props => props.theme.blueCool10};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.blueCool3}
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Meta />
          <GlobalStyle />
          <Navbar />
          {this.props.children}
          <p>Footer Goes here</p>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default Page;
