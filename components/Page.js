import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Meta from './Meta';
import Navbar from './Navbar';

const theme = {
  blueCool3: '#3E4C59',
  blueCool10: '#F5F7FA'
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Enrique';
    src: url('/static/fonts/EnriqueRegular.woff2') format('woff2'),
       url('/static/fonts/EnriqueRegular.woff') format('woff'),
       url('/static/fonts/EnriqueRegular.ttf')  format('truetype'),
       url('/static/fonts/EnriqueRegular.svg#EnriqueRegular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Enrique';
    src: url('/static/fonts/EnriqueMedium.woff2') format('woff2'),
       url('/static/fonts/EnriqueMedium.woff') format('woff'),
       url('/static/fonts/EnriqueMedium.ttf')  format('truetype'),
       url('/static/fonts/EnriqueMedium.svg#EnriqueMedium') format('svg');
    font-weight: 500;
    font-style: normal;
  }
  
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
    font-family: Enrique, 'sans-serif';
    font-weight: 400;
    color: ${props => props.theme.blueCool3};
    background: ${props => props.theme.blueCool10};
    text-rendering: optimizeLegibility;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: ${props => props.theme.blueCool3}
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <GlobalStyle />
          <Navbar />
          {this.props.children}
          <p>Footer Goes here</p>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
