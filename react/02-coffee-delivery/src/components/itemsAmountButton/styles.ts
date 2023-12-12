import styled from 'styled-components'

export const InputAmount = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    padding: 0.5rem;
    border: 0;
    background-color: transparent;
    outline: none;
    max-width: 2rem;
    font-size: 0.875rem;
  }

  button {
    border: 0;
    outline: none;
    background-color: transparent;
    padding: 0.5rem 0.3rem;
    cursor: pointer;
  }

  button svg {
    width: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`
