import styled from 'styled-components';
import Link from 'next/link';

const StyledBtn = styled.a`
  &,
  &:visited {
    border: 0.2rem solid var(--red);
    color: var(--red);
    border-radius: 0.4rem;
    padding: 1.2rem 3rem;
    cursor: pointer;
    background: transparent;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    transition: all 0.4s;
  }

  &:hover,
  &:active {
    color: var(--blueCool10);
    border-color: var(--redDark);
    background: var(--redDark);
  }
`;

const Btn = props => (
  <Link href={props.path}>
    <StyledBtn>{props.children}</StyledBtn>
  </Link>
);

export default Btn;
