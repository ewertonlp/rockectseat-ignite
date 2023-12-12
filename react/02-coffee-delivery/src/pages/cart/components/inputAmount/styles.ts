import styled from 'styled-components'

export const CardItemsContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme['base-hover']};
  padding-bottom: 2rem;

  img {
    width: 64px;
  }
`
export const CardItemsContent = styled.div`
  h5 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
`
export const CardItemsNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  button[type='button'] {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    border: 0;

    cursor: pointer;

    &:hover {
      transition: background 0.1s;
      background: ${(props) => props.theme['base-hover']};
    }
  }

  svg {
    color: ${(props) => props.theme['purple-medium']};
  }
`

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
    max-width: 3rem;
    font-size: 0.875rem;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: none;
    background-color: transparent;
    padding: 0.3rem;
    cursor: pointer;
  }

  button svg {
    width: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`






// li {
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1.5rem;
//   align-items: flex-start;
//   justify-content: space-between;
//   border-bottom: 1px solid ${(props) => props.theme['base-hover']};
//   padding-bottom: 1.5rem;

//   img {
//     width: 64px;
//     height: auto;
//   }

//   input {
//     width: 50px;
//   }

//   button {
//     display: flex;
//     align-items: center;
//     font-size: 0.875rem;
//     background: ${(props) => props.theme['base-button']};
//     color: ${(props) => props.theme['base-text']};
//     line-height: 1.3;
//     /* padding: 0.4rem 0.8rem; */
//     border: 0;
//     border-radius: 6px;
//     cursor: pointer;

//     svg {
//       color: ${(props) => props.theme['purple-medium']};
//     }

//     &:hover {
//       transition: background 0.1s;
//       background: ${(props) => props.theme['base-hover']};
//     }
//   }
// }