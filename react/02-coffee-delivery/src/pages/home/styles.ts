import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 2rem 0;
  margin: 0 auto;

  h2 {
    font-family: 'Baloo Bhaijaan 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 3rem 0;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    list-style: none;
  }
`

export const CoffeeList = styled.section`
  max-width: 1160px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
