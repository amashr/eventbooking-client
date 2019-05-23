import styled from 'styled-components';

const StyledLogos = styled.section`
  padding: 1rem;
  background: var(--blueCool9);

  .wrapper {
    max-width: 116rem;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    @media only screen and (min-width: ${props => props.theme.tabland}) {
      & {
        justify-content: space-between;
      }
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      padding: 1rem 3rem;
    }
  }

  @media only screen and (min-width: ${props => props.theme.desktop}) {
    & {
      padding: 1rem 0;
    }
  }

  @media only screen and (min-width: ${props => props.theme.bigdesktop}) {
    & {
      .wrapper {
        max-width: 80%;
      }
    }
  }
`;

const LogoBox = styled.div`
  flex-basis: 40%;

  img {
    max-width: 100%;
  }

  @media only screen and (min-width: ${props => props.theme.tabport}) {
    & {
      flex-basis: 30%;
    }
  }

  @media only screen and (min-width: ${props => props.theme.tabland}) {
    & {
      flex-basis: calc(100% / 6);

      &:not(:last-child) {
        padding-right: 3rem;
      }
    }
  }
`;

const Logos = () => (
  <StyledLogos>
    <div className="wrapper">
      <LogoBox>
        <img src="/static/logos/wezesha.png" alt="Logo" />
      </LogoBox>

      <LogoBox>
        <img src="/static/logos/time.png" alt="Logo" />
      </LogoBox>

      <LogoBox>
        <img src="/static/logos/ewater.png" alt="Logo" />
      </LogoBox>

      <LogoBox>
        <img src="/static/logos/kamata.png" alt="Logo" />
      </LogoBox>

      <LogoBox>
        <img src="/static/logos/sato.png" alt="Logo" />
      </LogoBox>

      <LogoBox>
        <img src="/static/logos/lixil.png" alt="Logo" />
      </LogoBox>
    </div>
  </StyledLogos>
);

export default Logos;
