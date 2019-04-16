import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

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

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Navbar />
          {this.props.children}
          <p>Footer Goes here</p>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
