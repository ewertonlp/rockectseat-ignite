import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 5rem auto 0;
  padding: 0 2rem;

  h1 {
    font-family: 'Baloo Bhaijaan 2', sans-serif;
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-size: 2rem;
    line-height: 1.3;
  }

  p {
    line-height: 1.3;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
export const DeliveryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
`

export const DeliveryInfo = styled.div`
  position: relative;
  gap: 6rem;
  margin-top: 2.5rem;
  background: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors['yellow-medium']},
    ${({ theme }) => theme.colors['purple-medium']}
  );
  padding: 1px;
  border-radius: 6px 36px 6px 36px;
  overflow: hidden;

  ul {
    width: 100%;
    padding: 2.5rem;
    list-style: none;
    font-size: 1rem;
    background: ${({ theme }) => theme.colors['background-gray']};
    border-radius: 5px 35px 5px 35px;
  }

  li {
    display: flex;
    align-items: center;
    padding-bottom: 2rem;

    p,
    strong {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }

  li:last-child {
    padding-bottom: 0;
  }

  li svg {
    width: 1rem;
    color: #fff;
  }
`

export const BaseIcon = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 0.75rem;
`

export const BgTimer = styled(BaseIcon)`
  background: ${({ theme }) => theme.colors['yellow-medium']};
`

export const BgPin = styled(BaseIcon)`
  background: ${({ theme }) => theme.colors['purple-medium']};
`

export const BgCurrency = styled(BaseIcon)`
  background: ${({ theme }) => theme.colors['yellow-dark']};
`

export const DeliveryImage = styled.img`
  float: right;
`
