import styled from 'styled-components'
import cover from '../../assets/cover.png'

export const HomeCover = styled.div`
  background-image: url(${cover});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 296px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-family: 'Coda', cursive;
    color: ${(props) => props.theme['blue']};
    font-size: 1.5rem;
    line-height: 1.6;
    margin : 1.2rem 0 2.875rem;
  }
`

export const SearchPost = styled.div`
  max-width: 54rem;
  width: 100%;
  margin: 12.25rem auto 3rem;
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    h3 {
      line-height: 1.6;
      font-size: 1.125rem;
    }

    span {
      line-height: 1.6;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    background-color: ${(props) => props.theme['base-input']};
    height: 3.125rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};
    border-radius: 6px;
    padding: 0 1rem;

    &:focus {
      border: 1px solid ${(props) => props.theme['blue']};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PostCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 54rem;
  margin: 0 auto 14.69rem;
`

export const PostCard = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  div {
    display: grid;
    grid-template-columns: 17.69rem 1fr;
    margin-bottom: 1.2rem;
    gap: 1rem;

    span {
      line-height: 1.6;
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
