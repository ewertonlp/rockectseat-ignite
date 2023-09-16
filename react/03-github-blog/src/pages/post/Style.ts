import styled from 'styled-components'
import cover from '../../assets/cover.png'

export const PostCover = styled.div`
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
    margin: 1.2rem 0 2.875rem;
  }
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  margin: 5rem auto;
  max-width: 54rem;
  width: 100%;
  color: ${(props) => props.theme['base-text']};
`
