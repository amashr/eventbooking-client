import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Meta from './Meta';
import Navbar from './Navbar';

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
    src: url('/static/fonts/EnriqueBold.woff2') format('woff2'),
       url('/static/fonts/EnriqueBold.woff') format('woff'),
       url('/static/fonts/EnriqueBold.ttf')  format('truetype'),
       url('/static/fonts/EnriqueBold.svg#EnriqueBold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  :root {
    --blueCool3: #3E4C59;
    --blueCool6: #7B8794;
    --blueCool9: #E4E7EB;
    --blueCool10: #F5F7FA;
    --redDark: #CF1124;
    --red: #EF4E4E;

    --transition: all .4s;

    --tabport:  37.5em; /* 600px */
    --tabland:  56.25em; /* 900px */
    --desktop:  75em; /* 1200px */
    --bigdesktop:  112.5em; /* 1800px */
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
    color: var(--blueCool3);
    background: var(--blueCool10);
    text-rendering: optimizeLegibility;
    letter-spacing: 1.2px;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--blueCool3);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`;

class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <GlobalStyle />
        <Navbar />
        {this.props.children}
        <p>Footer Goes here</p>
      </>
    );
  }
}

export default Page;
