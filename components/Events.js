import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Card from './Card';

const StyledEvents = styled.section`
  padding: 4.5rem 1rem;

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      padding: 5.5rem 2rem;
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      padding: 7rem 0;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 116rem;
  margin: 0 auto;

  h2 {
    font-size: 3rem;
  }
`;

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
      justify-content: space-between;

      & > div {
        margin-bottom: 0;
      }

      & > div:not(:nth-child(3n)) {
        flex-basis: calc(100% / 3);
        margin-right: 2rem;
      }

      & > div:nth-child(-n + 3) {
        margin-bottom: 2.6rem;
      }
    }
  }
`;

class Events extends Component {
  state = {
    events: [
      {
        title: 'Event1',
        img: '/static/event.jpg',
        date: 'Thu, May 16, 9:00am',
        location: 'Rock City Mall, Mwanza, Tanzania',
        price: 'free'
      },
      {
        title: 'Event2',
        img: '/static/event.jpg',
        date: 'Thu, May 26, 7:30am',
        location: 'Coco Beach, Dar es salaam, Tanzania',
        price: 'free'
      },
      {
        title: 'Event3',
        img: '/static/event.jpg',
        date: 'Thu, May 26, 7:30am',
        location: 'Coco Beach, Dar es salaam, Tanzania',
        price: 'free'
      },
      {
        title: 'Event4',
        img: '/static/event.jpg',
        date: 'Thu, May 26, 7:30am',
        location: 'Coco Beach, Dar es salaam, Tanzania',
        price: 'free'
      },
      {
        title: 'Event5',
        img: '/static/event.jpg',
        date: 'Thu, May 26, 7:30am',
        location: 'Coco Beach, Dar es salaam, Tanzania',
        price: 'free'
      },
      {
        title: 'Event6',
        img: '/static/event.jpg',
        date: 'Thu, May 26, 7:30am',
        location: 'Coco Beach, Dar es salaam, Tanzania',
        price: 'free'
      }
    ]
  };

  render() {
    return (
      <StyledEvents>
        <Wrapper>
          <h2>Top Selling</h2>
          <EventSubtitle>
            <h3>Concerts</h3>
            <Link href="">
              <a>See All Concerts</a>
            </Link>
          </EventSubtitle>

          <EventsWrapper>
            {this.state.events.map((event, key) => {
              return (
                <Card
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  price={event.price}
                  key={key}
                />
              );
            })}
          </EventsWrapper>
        </Wrapper>
      </StyledEvents>
    );
  }
}

export default Events;
