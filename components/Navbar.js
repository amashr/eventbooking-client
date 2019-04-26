import Link from 'next/link';
import styled from 'styled-components';

import Btn from './Btn';

const StyledNavbar = styled.nav`
  background: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 2rem 6rem;

  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2.4rem;

  a {
    &,
    &:visited {
      color: var(--red);
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
  display: none;

  svg {
    fill: var(--blueCool6);
  }
`;

const NavbarItem = styled.div`
  flex: 1;
  margin-left: 6rem;

  display: flex;
  justify-content: space-between;
`;

const NavbarLinkContainer = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;

  li {
    .link {
      &,
      &:visited {
        color: var(--blueCool10);
        transition: all 0.4s;
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

const Navbar = () => (
  <StyledNavbar>
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
      <NavbarLinkContainer>
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

      <NavbarLinkContainer>
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

export default Navbar;
