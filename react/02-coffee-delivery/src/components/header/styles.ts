import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors['background-gray']};
  padding: 2rem 0;
  z-index: 999;
  left: 0;
  top: 0;
  position: sticky;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const BaseNavStyle = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CityLink = styled(BaseNavStyle)`
  background-color: ${({ theme }) => theme.colors['purple-light']};

  margin-right: 0.5rem;

  .cityLinkItem {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cityLinkItem svg {
    margin-right: 0.25rem;
    color: ${({ theme }) => theme.colors['purple-medium']};
  }
`
export const CartLink = styled(BaseNavStyle)`
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  position: relative;

  .cartLinkItem {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
  }

  .cartLinkItem svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  .cartItemCount {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #993333;
    border-radius: 50%;
    font-size: 0.75rem;
  }
`
