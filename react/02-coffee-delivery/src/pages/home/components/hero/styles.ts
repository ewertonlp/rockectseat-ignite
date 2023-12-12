import styled from 'styled-components'

import background from '../../../../assets/Background.png'

export const HeroContainer = styled.div`
  width: 100%;
  height: 544px;
  padding: 2rem 0;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`
export const HeroContent = styled.div`
  width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 476px;
  padding: 0 1.5rem;

  h1 {
    font-family: 'Baloo Bhaijaan 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
    padding-right: 3.5rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
    padding-right: 6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  ul {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 2rem;
    row-gap: 1.6rem;
    margin-top: 4.125rem;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    font-size: 1rem;
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

export const BgShoppingCart = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const BgTimer = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-medium']};
`

export const BgPackage = styled(BaseIcon)`
  background: ${(props) => props.theme['base-text']};
`

export const BgCoffee = styled(BaseIcon)`
  background: ${(props) => props.theme['purple-medium']};
`
