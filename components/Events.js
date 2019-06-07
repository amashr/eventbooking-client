import styled from 'styled-components';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Event from './Event';

const StyledEvents = styled.section`
  padding: 4.5rem 1rem;

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      padding: 5.5rem 2rem;
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      padding: 6rem 3rem;
    }
  }

  @media only screen and (min-width: ${props => props.theme.desktop}) {
    & {
      padding: 7rem 0;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 116rem;
  margin: 0 auto;

  h2 {
    font-size: 2.3rem;
    margin-bottom: -1.5rem;
    font-weight: 600;
  }

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      h2 {
        font-size: 2.5rem;
      }
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      h2 {
        font-size: 3rem;
      }
    }
  }

  @media only screen and (min-width: ${props => props.theme.bigdesktop}) {
    & {
      max-width: 80%;
    }
  }
`;

const ALL_EVENTS_QUERY = gql`
  query ALL_EVENTS_QUERY {
    events {
      id
      title
      image
      price
      createdAt
    }
  }
`;

const Events = props => (
  <StyledEvents>
    <Wrapper>
      <h2>Top Selling</h2>
      <Query query={ALL_EVENTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return props.eventsCategories.map(eventCat => (
            <Event events={data.events} eventCat={eventCat} key={eventCat} />
          ));
        }}
      </Query>
    </Wrapper>
  </StyledEvents>
);

export default Events;
