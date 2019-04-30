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
    transition: var(--transition);

    a:hover {
      color: var(--redDark);
    }
  }
`;

const LowerFooter = styled.div`
  padding: 3rem 0 10rem;

  display: flex;
  justify-content: space-between;

  p {
    color: var(--blueCool6);
  }
`;

const PolicyFooter = styled.ul`
  display: flex;

  li {
    transition: var(--transition);

    a:hover {
      color: var(--redDark);
    }
  }

  li:not(:last-child) {
    margin-right: 1.3rem;
  }
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

        <PolicyFooter>
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
        </PolicyFooter>

        <ul>
          <li>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </Link>
          </li>
        </ul>
      </LowerFooter>
    </Wrapper>
  </StyledFooter>
);

export default Footer;
