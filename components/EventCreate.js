import Link from 'next/link';

const EventCreate = () => (
  <section>
    <div>
      <div>
        <h4>Want to create an event?</h4>
      </div>
      <div>
        <Link href="/">
          <a>
            Learn more
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
              </svg>
            </span>
          </a>
        </Link>
      </div>
    </div>
  </section>
);

export default EventCreate;
