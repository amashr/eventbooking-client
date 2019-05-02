import Link from 'next/link';
import styled from 'styled-components';

const StyledEventBanner = styled.section`
  background: var(--red);
  color: var(--blueCool10);
`;

const Wrapper = styled.div`
  max-width: 78rem;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h4 {
    font-size: 3rem;
    line-height: 1;
    text-align: center;
    padding-bottom: 1rem;

    flex-basis: 100%;
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      padding: 2rem 0;
      justify-content: space-between;

      h4 {
        font-size: 4.4rem;
        text-align: left;
        padding-bottom: 0;

        flex-basis: auto;
      }
    }
  }

  .learn {
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    transition: var(--transition);

    &:hover {
      color: var(--blueCool10);

      svg {
        transform: translateX(0.5rem);
        fill: var(--blueCool10);
      }
    }

    svg {
      padding-left: 1rem;
      width: 3rem;
      height: 3rem;
      fill: var(--blueCool3);
      transition: var(--transition);
    }

    @media only screen and (min-width: ${props => props.theme.tabport}) {
      & {
        font-size: 2rem;
      }
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
