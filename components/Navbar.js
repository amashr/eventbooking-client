import Link from 'next/link';
import styled from 'styled-components';

import Btn from './Btn';

const StyledNavbar = styled.nav`
  background: purple;
  padding: 2rem 6rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2.4rem;

  a {
    color: ${props => props.theme.red};
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
    a {
      color: ${props => props.theme.blueCool10};
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

    <NavbarItem>
      <NavbarLinkContainer>
        <li>
          <Link href="/concerts">
            <a>Concerts</a>
          </Link>
        </li>
        <li>
          <Link href="/sports">
            <a>Sports</a>
          </Link>
        </li>
        <li>
          <Link href="/arts">
            <a>Arts &amp; Theater</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>For You</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>More</a>
          </Link>
        </li>
      </NavbarLinkContainer>

      <NavbarLinkContainer>
        <li>
          <Link href="/login">
            <a>Sign In</a>
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
