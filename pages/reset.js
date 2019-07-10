import styled from 'styled-components';

const StyledReset = styled.div`
  padding-top: 8.6rem;
`;

const reset = props => (
  <StyledReset>
    <p>Reset your password {props.query.resetToken}</p>
  </StyledReset>
);

export default reset;
