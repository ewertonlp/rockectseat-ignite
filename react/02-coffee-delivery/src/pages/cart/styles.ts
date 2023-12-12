import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CartContainer = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 1rem auto;

  display: grid;
  grid-template-columns: 640px 448px;
  column-gap: 2rem;

  h2 {
    font-family: 'Baloo Bhaijaan 2', sans-serif;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  h4 {
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-weight: 400;
    margin-bottom: 0.2rem;
  }

  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
    margin-right: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const CartForm = styled.form`
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  input {
    padding: 0.75rem;
    margin: 0.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: 0.875rem;
    border-radius: 4px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const CartPaymentOptions = styled.div`
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem 0 0;

  h4 {
    text-align: start;
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-weight: 400;
    margin-bottom: 0.2rem;
  }

  p {
    margin-left: 1.875rem;
    font-size: 0.875rem;
    line-height: 1.3;
  }

  svg {
    color: ${({ theme }) => theme.colors['purple-medium']};
  }

  button {
    margin-top: 2rem;
    padding: 1rem 0;
    padding-left: 1rem;

    display: flex;
    align-items: center;
    width: 11.17rem;

    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors['base-text']};
    text-transform: uppercase;
    line-height: 1.6;

    border: 0;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors['base-button']};

    cursor: pointer;

    &:hover {
      transition: background-color 0.1s;
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    &::focus {
      border-color: ${({ theme }) => theme.colors['purple-medium']};
      background-color: ${({ theme }) => theme.colors['purple-light']};
    }
  }
`

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartItemList = styled.div`
  padding: 2.5rem 2.5rem 0;
  background: ${({ theme }) => theme.colors['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
`

export const CartItemsContent = styled.div`
  display: flex;
`

export const CartItemsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CartItemsButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartPaymentDetails = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.25rem;
    margin-top: 1rem;
  }
`

export const Radio = styled.button`
  outline: ${({ theme }) => theme.colors['purple-dark']};

  &:focus {
    outline: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const CartPaymentDetailsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ul {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    font-size: 0.875rem;
    list-style: none;
  }

  ul:first-child {
    text-align: left;
  }

  ul:last-child {
    text-align: right;
  }

  li {
    margin-bottom: 0.75rem;
  }

  li:last-child {
    font-weight: 800;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const CartCheckoutButton = styled.button`
  margin: 1.5rem 0 0;
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['yellow-medium']};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.6;
  font-size: 0.875rem;
  text-transform: uppercase;
  padding: 0.75rem 7.343rem;

  cursor: pointer;

  &:hover {
    transition: background 0.1s;
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const PaymentErrorMessage = styled.p`
  ${mixins.fonts.textXS};
  font-weight: 400;
  color: red;
`

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d5d5;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      ${mixins.fonts.buttonM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`
