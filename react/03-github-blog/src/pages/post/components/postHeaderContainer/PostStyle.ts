import styled from 'styled-components'

export const PostHeaderInfoContainer = styled.div`
  background: ${(props) => props.theme['base-background']};
  box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.25);
  max-width: 54rem;
  width: 100%;
  margin: -88px auto;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  position: relative;
  z-index: 999;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;

    Link,
    a {
      color: ${(props) => props.theme['blue']};
      text-decoration: none;
      font-size: 0.75rem;
      line-height: 1.6;

      svg:first-of-type {
        margin-right: 0.5rem;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  strong {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 0.5rem;

    li {
      margin-right: 1.5rem;
      color: ${(props) => props.theme['base-span']};

      svg {
        margin-right: 0.5rem;
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
