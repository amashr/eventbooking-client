import Link from 'next/link';
import Nav from '../components/Nav';

const Header = () => (
  <div>
    <Link href="/">
      <a>Event Booking</a>
    </Link>

    <Nav />
  </div>
);

export default Header;
