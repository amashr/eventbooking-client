import styled from 'styled-components';
import Link from 'next/link';

import Card from './Card';

const EventSubtitle = styled.div`
  padding: 3.5rem 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 600;
  }

  a {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--red);
  }
`;

const EventsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  @media only screen and (min-width: 480px) {
    & {
      justify-content: space-between;

      & > div:not(:last-child) {
        margin-bottom: 0;
      }

      & > div:not(:nth-last-of-type(-n + 2)) {
        margin-bottom: 2rem;
      }
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      & > div {
        margin-bottom: 0;
      }

      & > div:not(:nth-last-of-type(-n + 2)) {
        margin-bottom: 0;
      }

      & > div:nth-child(-n + 3) {
        margin-bottom: 2.6rem;
      }
    }
  }
`;

const Event = props => (
  <>
    <EventSubtitle>
      <h3>{props.eventCat}</h3>
      <Link href={{ pathname: `/${props.eventCat}` }}>
        <a>See All {props.eventCat}</a>
      </Link>
    </EventSubtitle>

    <EventsWrapper>
      {props.events.map(event => {
        return (
          <Card
            title={event.title}
            date={event.createdAt}
            location={event.location}
            price={event.price}
            id={event.id}
            key={event.id}
            img={event.image}
          />
        );
      })}
    </EventsWrapper>
  </>
);

export default Event;
