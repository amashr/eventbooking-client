import React, { Component } from 'react';
import Link from 'next/link';

import Card from './Card';

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
      <section>
        <div>
          <h2>Top Selling</h2>
          <div>
            <h3>Concerts</h3>
            <Link href="">
              <a>See All Concerts</a>
            </Link>
          </div>

          <div>
            {this.state.events.map(event => {
              return (
                <Card
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  price={event.price}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
