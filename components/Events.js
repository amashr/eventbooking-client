import React, { Component } from 'react';
import styled from 'styled-components';

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

const Events = props => (
  <StyledEvents>
    <Wrapper>
      <h2>Top Selling</h2>
      {props.eventsCategories.map(eventCat => (
        <Event eventCat={eventCat} events={props.events} key={eventCat} />
      ))}
    </Wrapper>
  </StyledEvents>
);

export default Events;
