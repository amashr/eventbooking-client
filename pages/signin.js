import SignIn from '../components/Signin';
import RequestReset from '../components/RequestReset';
import styled from 'styled-components';

const StyledSignIn = styled.div`
  padding-top: 8.6rem;
`;

const SignInPage = () => (
  <StyledSignIn>
    <SignIn />
    <RequestReset />
  </StyledSignIn>
);

export default SignInPage;
