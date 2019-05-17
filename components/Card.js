import Link from 'next/link';
import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 0.4rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  max-width: 100%;

  display: flex;
  flex-direction: column;

  a {
    img {
      border-top-left-radius: 0.4rem;
      border-top-right-radius: 0.4rem;
      width: 100%;
      height: 17rem;
      object-fit: cover;
    }
  }

  @media only screen and (min-width: 480px) {
    & {
      max-width: 48%;
    }
  }

  @media only screen and (min-width: 900px) {
    & {
      max-width: 36rem;
    }
  }
`;

const CardContent = styled.div`
  padding: 2rem 1rem;
  font-size: 1.4rem;

  h4 {
    font-size: 1.5rem;
    padding-bottom: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .date {
    color: rgba(0, 0, 0, 0.4);
    padding-bottom: 0.5rem;
  }

  .location {
    padding-bottom: 0.5rem;
  }

  .price {
    text-transform: capitalize;
  }
`;

const Card = props => (
  <StyledCard>
    <Link href="/">
      <a>
        <img src="/static/event.jpg" alt={props.title} />
      </a>
    </Link>

    <CardContent>
      <h4>
        <Link href="/">
          <a>{props.title}</a>
        </Link>
      </h4>
      <p className="date">{props.date}</p>
      <p className="location">{props.location}</p>
      <p className="price">{props.price}</p>
    </CardContent>
  </StyledCard>
);

export default Card;
