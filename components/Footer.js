import Link from 'next/link';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 1.5rem;
`;

const Wrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;

const UpperFooter = styled.div`
  padding: 6rem 0;
  border-bottom: 1px solid var(--blueCool3);

  display: flex;
  justify-content: space-between;

  h4 {
    padding-bottom: 1.2rem;
    text-transform: uppercase;
  }

  li {
    padding-bottom: 0.6rem;
  }
`;

const LowerFooter = styled.div`
  padding: 3rem 0 10rem;

  display: flex;
  justify-content: space-between;
`;

const Footer = () => (
  <StyledFooter>
    <Wrapper>
      <UpperFooter>
        <ul>
          <h4>Helpful Links</h4>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
        </ul>

        <ul>
          <h4>Our Network</h4>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
        </ul>

        <ul>
          <h4>About Us</h4>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
        </ul>

        <ul>
          <h4>Friends &amp; Partners</h4>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>My Link</a>
            </Link>
          </li>
        </ul>
      </UpperFooter>

      <LowerFooter>
        <p>&copy; EventBooking 2019. All rights reserved.</p>

        <ul>
          <li>
            <Link href="/">
              <a>Terms of Service</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Privacy &amp; Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Others</a>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/">
              <a>Twitter icon</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Fb icon</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>nst icon</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Youtube icon</a>
            </Link>
          </li>
        </ul>
      </LowerFooter>
    </Wrapper>
  </StyledFooter>
);

export default Footer;
