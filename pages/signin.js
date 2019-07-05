import SignIn from '../components/Signin';
import styled from 'styled-components';

const StyledSignIn = styled.div`
  padding-top: 8.6rem;
`;

const SignInPage = () => (
  <StyledSignIn>
    <SignIn />
  </StyledSignIn>
);

export default SignInPage;
