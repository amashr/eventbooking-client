import Link from 'next/link'

import Card from './Card';

const Events = () => (
  <section>
    <div>
      <h2>Top Selling</h2>
      <div>
        <h3>Concerts</h3>
        <Link href=""><a>See All Concerts</a></Link>
      </div>

      <div>
        <Card />
      </div>
    </div>
  </section>
);

export default Events;
