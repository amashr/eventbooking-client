import Link from 'next/link'

const Events = () => (
  <section>
    <div>
      <h2>Top Selling</h2>
      <div>
        <h3>Concerts</h3>
        <Link href=""><a>See All Concerts</a></Link>
      </div>

      <div>
        <div>
          <img src="/static/event.jpg" alt="Event" />
          <h4>Event Title</h4>
          <p>Thu, May 16, 9:00am</p>
          <p>Rock City Mall, Mwanza, Tanzania</p>
          <p>Free</p>
        </div>
      </div>
    </div>
  </section>
);

export default Events;
