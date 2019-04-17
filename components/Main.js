import styled from 'styled-components';

const StyledMain = styled.main`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.5)
    ),
    url('/static/main.jpg');
  background-blend-mode: saturation;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -2px;
  height: 400px;
  padding-top: 100px;
`;

const Main = () => (
  <StyledMain>
    <h1>World Designer Event 2018</h1>
    <h2>28-31 May 2019 | Izmir, Turkey</h2>
    <p>
      Aliquam rutrum pellentesque semper. Maecenas sit amet ante iaculis sapien
      feugiat tristique.
    </p>

    <div>
      <input type="text" placeholder="Search event by keyword " />
      <button>search icon</button>
    </div>
  </StyledMain>
);

export default Main;
