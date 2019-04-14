import Link from 'next/link';

const Header = () => (
  <nav className="Header">
    <Link href="/">
      <a>Event Booking</a>
    </Link>

    <ul className="Header__nav-item">
      <li>
        <Link href="/concerts">
          <a>Concerts</a>
        </Link>
      </li>
      <li>
        <Link href="/sports">
          <a>Sports</a>
        </Link>
      </li>
      <li>
        <Link href="/arts">
          <a>Arts &amp; Theater</a>
        </Link>
      </li>
      <li>
        <Link href="/you">
          <a>For You</a>
        </Link>
      </li>
      <li>
        <Link href="/more">
          <a>More</a>
        </Link>
      </li>
    </ul>

    <ul className="Header__nav-item Header__nav-item--right">
      <li>
        <Link href="/login">
          <a>Sign In</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="btn">Get Started</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
