import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100vw;
  margin: 0 auto;

  background: ${(props) => props.theme['background-gray']};

  display: flex;
  justify-content: center;
  flex-direction: column;
`
