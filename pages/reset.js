import styled from 'styled-components';

import Reset from '../components/Reset';

const StyledReset = styled.div`
  padding-top: 8.6rem;
`;

const reset = props => (
  <StyledReset>
    <Reset resetToken={props.query.resetToken} />
  </StyledReset>
);

export default reset;
