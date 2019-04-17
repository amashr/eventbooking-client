import styled from 'styled-components';
import Link from 'next/link';

const StyledBtn = styled.a`
  border: 0.2rem solid ${props => props.theme.red};
  color: ${props => props.theme.red} !important;
  border-radius: 0.4rem;
  padding: 1.2rem 3rem;
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
`;

const Btn = props => (
  <Link href={props.path}>
    <StyledBtn>{props.children}</StyledBtn>
  </Link>
);

export default Btn;
