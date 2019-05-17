import styled from 'styled-components';
import Link from 'next/link';

import Card from './Card';

const EventSubtitle = styled.div`
  padding: 1rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      padding: 2rem 0 1.5rem;
    }
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

  @media only screen and (min-width: ${props => props.theme.tabland}) {
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

const Event = () => (
  <>
    <EventSubtitle>
      <h3>Concerts</h3>
      <Link href="">
        <a>See All Concerts</a>
      </Link>
    </EventSubtitle>

    <EventsWrapper>
      {/* {this.state.events.map((event, key) => {
              return (
                <Card
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  price={event.price}
                  key={key}
                />
              );
            })} */}
    </EventsWrapper>
  </>
);

export default Event;
