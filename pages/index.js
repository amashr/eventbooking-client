import react, { Component } from 'react';

import Main from '../components/Main';
import Logos from '../components/Logos';
import EventCreate from '../components/EventCreate';
import Events from '../components/Events';

class Home extends Component {
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
    ],
    eventsCategories: ['Concerts', 'Sports', 'Arts & Theater', 'Family']
  };

  render() {
    const { events, eventsCategories } = this.state;

    return (
      <>
        <Main />
        <Logos />
        <Events eventsCategories={eventsCategories} events={events} />
        <EventCreate />
      </>
    );
  }
}

export default Home;
