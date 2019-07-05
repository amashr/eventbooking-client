import Signup from '../components/Signup';
import styled from 'styled-components';

const StyledSignup = styled.div`
  padding-top: 8.6rem;
`;

const SignupPage = () => (
  <StyledSignup>
    <Signup />
  </StyledSignup>
);

export default SignupPage;
