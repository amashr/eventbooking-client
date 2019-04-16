import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Meta from './Meta';
import Navbar from './Navbar';

const theme = {
  blueCool3: '#3E4C59',
  blueCool10: '#F5F7FA'
};

const StyledPage = styled.div`
  color: ${props => props.theme.blueCool3};
  background: ${props => props.theme.blueCool10};
`;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    box-sizing: inherit;
    font-size: 10px;
  }

  body {
    padding: 0;
    margin: 0;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyle />
          <Navbar />
          {this.props.children}
          <p>Footer Goes here</p>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
