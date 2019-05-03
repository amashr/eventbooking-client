import Link from 'next/link';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid black;
  max-width: 36rem;

  display: flex;
  flex-direction: column;

  a {
    img {
      width: 100%;
      height: 17rem;
      object-fit: cover;
    }
  }
`;

const CardContent = styled.div`
  /* flex: 1 50%; */
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
      <p>{props.date}</p>
      <p>{props.location}</p>
      <p>{props.price}</p>
    </CardContent>
  </StyledCard>
);

export default Card;
