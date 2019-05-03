import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Card from './Card';

const StyledEvents = styled.section`
  padding: 7rem 0;
`;

const Wrapper = styled.div`
  max-width: 116rem;
  margin: 0 auto;

  h2 {
    font-size: 3rem;
  }
`;

const EventSubtitle = styled.div`
  padding: 2rem 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EventsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div:not(:nth-child(3n)) {
    flex-basis: calc(100% / 3);
    margin-right: 2rem;
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
