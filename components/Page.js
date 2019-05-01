import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';

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

    --box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.3);
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
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    color: var(--blueCool3);
    background: var(--blueCool10);
    text-rendering: optimizeLegibility;
    letter-spacing: 1.2px;
    font-size: 1.6rem;
    position: relative;
  }

  a {
    text-decoration: none;
    color: var(--blueCool3);
  }

  ul {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`;

class Page extends Component {
  _isMounted = false;
  state = { isScroll: false };

  componentDidMount() {
    this._isMounted = true;
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (this._isMounted) {
      if (scrollTop > 50) {
        this.setState({ isScroll: true });
      } else {
        this.setState({ isScroll: false });
      }
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <GlobalStyle />
          <Navbar isScroll={this.state.isScroll} />
          {this.props.children}
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
