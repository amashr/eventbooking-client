import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Meta from './Meta';
import Navbar from './Navbar';

const theme = {
  tabport: '37.5em', // 600px
  tabland: '56.25em', // 900px
  desktop: '75em', // 1200px
  bigdesktop: '112.5em' // 1800px
};

const GlobalStyle = createGlobalStyle`
  :root {
    --blueCool3: #3E4C59;
    --blueCool6: #7B8794;
    --blueCool9: #E4E7EB;
    --blueCool10: #F5F7FA;
    --redDark: #CF1124;
    --red: #EF4E4E;

    --transition: all .4s;
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
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: var(--blueCool3);
    background: var(--blueCool10);
    text-rendering: optimizeLegibility;
    letter-spacing: 1.2px;
    font-size: 1.6rem;
    height: 1000px; /* Temporary' */
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: var(--blueCool3);
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
