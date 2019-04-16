import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
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
        <Link href="/">
          <a>For You</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>More</a>
        </Link>
      </li>
    </ul>

    <ul>
      <li>
        <Link href="/login">
          <a>Sign In</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Get Started</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
