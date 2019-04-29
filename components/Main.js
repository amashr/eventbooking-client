import styled from 'styled-components';

const StyledMain = styled.main`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('/static/main.jpg');
  background-blend-mode: saturation;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -0.2rem;
  height: 40rem;
  padding: 0 1rem;
  color: var(--blueCool10);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      padding: 0 2rem;
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      padding: 3.5rem 3rem 0;
    }
  }

  @media only screen and (min-width: ${props => props.theme.desktop}) {
    & {
      padding: 10rem 0 0;
    }
  }
`;

const StyledMainWrapper = styled.div`
  max-width: 100rem;

  h1 {
    font-size: 3.4rem;
    margin-bottom: 5rem;

    @media only screen and (min-width: ${props => props.theme.tabport}) {
      & {
        font-size: 4rem;
      }
    }

    @media only screen and (min-width: ${props => props.theme.tabland}) {
      & {
        font-size: 4.4rem;
        margin-right: 15.2rem;
      }
    }
  }
`;

const StyledForm = styled.div`
  display: flex;
  align-items: center;

  input {
    font-family: inherit;
    font-size: 1.8rem;
    color: var(--blueCool3);
    background: var(--blueCool10);
    border: none;
    border-radius: 0.4rem;
    box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.3);
    width: 100%;
    padding: 1.5rem;
    margin-right: -4.5rem;
    transition: var(--transition);

    @media only screen and (min-width: ${props => props.theme.tabport}) {
      & {
        font-size: 1.7rem;
        padding: 1.7rem;
        margin-right: -4.7rem;
      }
    }

    @media only screen and (min-width: ${props => props.theme.tabland}) {
      & {
        width: 60%;
        font-size: 2rem;
        padding: 2rem;
        margin-right: -5rem;
      }
    }

    &:focus {
      outline: none;
      background: var(--blueCool9);
      width: 100%;
    }

    &::placeholder {
      color: var(--blueCool6);
    }

    &:focus + button {
      background: var(--blueCool9);
    }
  }
`;

const ButtonIcon = styled.button`
  border: none;
  background: var(--blueCool10);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  svg {
    fill: var(--blueCool3);
  }
`;

const Main = () => (
  <StyledMain>
    <StyledMainWrapper>
      <h1>Aliquam rutrum pellentesque sempere.</h1>

      <StyledForm>
        <input type="text" placeholder="Search events by keyword " />
        <ButtonIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
          </svg>
        </ButtonIcon>
      </StyledForm>
    </StyledMainWrapper>
  </StyledMain>
);

export default Main;
