import styled from 'styled-components';

const StyledMain = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('/static/main.jpg');
  background-blend-mode: saturation;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -0.2rem;
  height: 40rem;
  padding-top: 10rem;
  color: ${props => props.theme.blueCool10};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledMainWrapper = styled.div`
  width: 100rem;

  h1 {
    font-size: 50px;
    margin-right: 20rem;
  }
`;

const Main = () => (
  <StyledMain>
    <StyledMainWrapper>
      <h1>Aliquam rutrum pellentesque sempere.</h1>

      <div>
        <input type="text" placeholder="Search event by keyword " />
        <button>search icon</button>
      </div>
    </StyledMainWrapper>
  </StyledMain>
);

export default Main;
