import react, { Component } from 'react';

import Main from '../components/Main';
import Logos from '../components/Logos';
import Banner from '../components/Banner';
import Events from '../components/Events';

class Home extends Component {
  state = {
    eventsCategories: ['Concerts', 'Sports', 'Arts & Theater', 'Family']
  };

  render() {
    const { eventsCategories } = this.state;

    return (
      <>
        <Main />
        <Logos />
        <Events eventsCategories={eventsCategories} />
        <Banner />
      </>
    );
  }
}

export default Home;
