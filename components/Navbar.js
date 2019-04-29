import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Btn from './Btn';

const StyledNavbar = styled.nav`
  background: ${props =>
    props.isScroll ? 'var(--blueCool10)' : 'transparent'};
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      padding: 1.5rem 2rem;
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      padding: 2rem 3rem;
    }
  }

  @media only screen and (min-width: ${props => props.theme.desktop}) {
    & {
      padding: 2rem 6rem;
    }
  }
`;

const Logo = styled.div`
  font-size: 2rem;

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      font-size: 2.4rem;
    }
  }

  a {
    &,
    &:visited {
      color: var(--red);
      transition: var(--transition);
    }

    &:hover,
    &:active {
      color: var(--redDark);
    }
  }
`;

const NavbarMenu = styled.div`
  margin-left: auto;
  cursor: pointer;

  svg {
    fill: var(--blueCool6);
  }

  @media only screen and (min-width: ${props => props.theme.desktop}) {
    & {
      display: none;
    }
  }
`;

const NavbarItem = styled.div`
  display: none;

  @media only screen and (min-width: ${props => props.theme.desktop}) {
    & {
      flex: 1;
      margin-left: 6rem;

      display: flex;
      justify-content: space-between;
    }
  }
`;

const NavbarLinkContainer = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;

  li {
    .link {
      &,
      &:visited {
        color: ${props =>
          props.isScroll ? 'var(--blueCool3)' : 'var(--blueCool10)'};
        transition: var(--transition);
      }

      &:hover,
      &:active {
        color: var(--redDark);
      }
    }
  }

  li:not(:last-child) {
    margin-right: 3rem;
  }
`;

class Navbar extends Component {
  state = { isScroll: false };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ isScroll: true });
    } else {
      this.setState({ isScroll: false });
    }
  };

  render() {
    return (
      <StyledNavbar isScroll={this.state.isScroll}>
        <Logo>
          <Link href="/">
            <a>Event Booking</a>
          </Link>
        </Logo>

        <NavbarMenu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </NavbarMenu>

        <NavbarItem>
          <NavbarLinkContainer isScroll={this.state.isScroll}>
            <li>
              <Link href="/concerts">
                <a className="link">Concerts</a>
              </Link>
            </li>
            <li>
              <Link href="/sports">
                <a className="link">Sports</a>
              </Link>
            </li>
            <li>
              <Link href="/arts">
                <a className="link">Arts &amp; Theater</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link">For You</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link">More</a>
              </Link>
            </li>
          </NavbarLinkContainer>

          <NavbarLinkContainer isScroll={this.state.isScroll}>
            <li>
              <Link href="/login">
                <a className="link">Sign In</a>
              </Link>
            </li>
            <li>
              <Btn path="/">Get Started</Btn>
            </li>
          </NavbarLinkContainer>
        </NavbarItem>
      </StyledNavbar>
    );
  }
}

export default Navbar;
