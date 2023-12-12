import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const ProductCardStyle = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme.colors['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding-bottom: 1rem;

  img {
    position: relative;
    margin: -1rem auto;
    width: 7.5rem;
    margin-bottom: 0.1rem;
  }

  .tag {
    font-size: 0.625rem;
    color: ${({ theme }) => theme.colors['yellow-dark']};
    background-color: ${({ theme }) => theme.colors['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    text-align: center;
    margin-top: 0.1rem;
  }

  h3 {
    font-family: 'Baloo Bhaijaan 2', sans-serif;
    line-height: 1.3;
    font-size: 1.25rem;
  }

  p {
    line-height: 1.3;
    font-size: 0.875rem;
    margin: 0 1.5rem;
    color: ${({ theme }) => theme.colors['base-label']};
  }

  .cardRodape {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.25rem;
  }
  .cardRodape span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-text']};
    /* margin-right: -1.25rem; */
  }
  .cardRodape strong {
    font-family: 'Baloo Bhaijaan 2', sans-serif;
    line-height: 1.3;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-text']};
    margin-right: 0.5rem;
  }

  .btnCart {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: ${({ theme }) => theme.colors['purple-dark']};
    padding: 0.5rem;
    color: white;
    border-radius: 6px;
    margin-left: 0.5rem;

    cursor: pointer;
    transition: 0.1s ease;
  }

  .btnCart:hover {
    background-color: ${({ theme }) => theme.colors['purple-medium']};
  }
`

// export const InputAmount = styled.div`
//   background-color: ${({ theme }) => theme.colors['base-button']};
//   color: ${({ theme }) => theme.colors['purple-dark']};
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   input {
//     padding: 0.5rem;
//     border: 0;
//     background-color: transparent;
//     outline: none;
//     max-width: 2rem;
//     font-size: 0.875rem;
//   }

//   button {
//     border: 0;
//     outline: none;
//     background-color: transparent;
//     padding: 0.5rem 0.3rem;
//     cursor: pointer;
//   }

//   button svg {
//     width: 0.875rem;
//     color: ${({ theme }) => theme.colors['purple-dark']};
//   }
// `
export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};
  }

  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors['yellow-dark'] : theme.colors['purple-dark']};
    transition: background-color 0.2s;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 8px;
    display: flex;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`
