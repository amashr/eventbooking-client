import Link from 'next/link';
import styled from 'styled-components';

const StyledEventBanner = styled.section`
  background: var(--red);
  color: var(--blueCool10);
`;

const Wrapper = styled.div`
  max-width: 78rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    font-size: 6rem;
    line-height: 1;
  }

  .learn {
    font-size: 20px;

    display: flex;
    align-items: center;
    transition: var(--transition);

    &:hover {
      color: var(--blueCool10);

      svg {
        transform: translateX(5px);
        fill: var(--blueCool10);
      }
    }

    svg {
      padding-left: 10px;
      width: 30px;
      height: 30px;
      fill: var(--blueCool3);
      transition: var(--transition);
    }
  }
`;

const EventCreate = () => (
  <StyledEventBanner>
    <Wrapper>
      <h4>
        Want to create
        <br /> an event?
      </h4>
      <div>
        <Link href="/">
          <a className="learn">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </a>
        </Link>
      </div>
    </Wrapper>
  </StyledEventBanner>
);

export default EventCreate;
