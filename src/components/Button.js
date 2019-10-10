import styled from 'styled-components';

export const MainButton = styled.button`
  text-transform: captitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.03rem solid var(--secondaryColor);
  border-color: ${props =>
    props.cart ? 'var(--tertiaryColor)' : 'var(--secondaryColor)'};
  color: ${props =>
    props.cart ? 'var(--tertiaryColor)' : 'var(--secondaryColor)'};
  border-radius: 0.45rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 1s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? 'var(--tertiaryColor)' : 'var(--secondaryColor)'};
    color: ${props => (props.cart ? 'var(--mainDark)' : 'var(--primaryColor)')};
  }
  &:focus {
    outline: none;
  }
`;
