import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Link from 'next/link';
import styled from 'styled-components';

import Btn from './Btn';
import User from './User';
import Signout from './Signout';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const StyledNavbar = styled.nav`
  background: ${props =>
    props.isScroll ? 'var(--blueCool10)' : 'transparent'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: ${props => (props.isScroll ? 'var(--box-shadow)' : 'none')};
  transition: var(--transition);

  display: flex;
  align-items: center;

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      padding: ${props => (props.isScroll ? '1rem 2rem' : '1.5rem 2rem')};
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      padding: ${props => (props.isScroll ? '1.5rem 3rem' : '2rem 3rem')};
    }
  }

  @media only screen and (min-width: ${props => props.theme.desktop}) {
    & {
      padding: ${props => (props.isScroll ? '1.5rem 6rem' : '2rem 6rem')};
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
      text-transform: lowercase;
      font-weight: 600;
      transition: var(--transition);
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
        font-weight: 300;
        color: ${props =>
          props.isScroll ? 'var(--blueCool3)' : 'var(--blueCool10)'};
        transition: var(--transition);
      }

      &:hover,
      &:active {
        color: var(--red);
      }
    }
  }

  li:not(:last-child) {
    margin-right: 3rem;
  }
`;

const Navbar = props => (
  <StyledNavbar isScroll={props.isScroll}>
    <Logo>
      <Link href="/">
        <a>EventBooking</a>
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
      <User>
        {({ data: { user } }) => (
          <>
            <NavbarLinkContainer isScroll={props.isScroll}>
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
                <Link href="/more">
                  <a className="link">More</a>
                </Link>
              </li>
            </NavbarLinkContainer>

            <NavbarLinkContainer isScroll={props.isScroll}>
              {!user && (
                <>
                  <li>
                    <Link href="/signin">
                      <a className="link">Sign In</a>
                    </Link>
                  </li>

                  <li>
                    <Btn path="/signup">Get Started</Btn>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li>
                    <Link href="/account">
                      <a className="link">Account</a>
                    </Link>
                  </li>
                  <li>
                    <Signout />
                  </li>
                </>
              )}
            </NavbarLinkContainer>
          </>
        )}
      </User>
    </NavbarItem>
  </StyledNavbar>
);

export default Navbar;
