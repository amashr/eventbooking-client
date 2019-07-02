import SignupPage from '../components/Signup';
import styled from 'styled-components';

const StyledSignup = styled.div`
  padding-top: 8.6rem;
`;

const Signup = () => (
  <StyledSignup>
    <SignupPage />
  </StyledSignup>
);

export default Signup;
