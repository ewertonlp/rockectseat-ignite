import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  background: ${(props) => props.theme['base-background']};
  box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.25);
  max-width: 54rem;
  width: 100%;
  margin: -88px auto;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2rem;
  position: relative;
  z-index: 999;

  img {
    width: 148px;
    border-radius: 8px;
    /* margin-right: 2rem; */
  }
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;

  p {
    margin: 0.5rem 0 1.5rem;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      margin-right: 1.5rem;

      svg {
        margin-right: 0.5rem;
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const UserInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  

  strong {
    font-size: 1.5rem;
  }

  a {
    color: ${(props) => props.theme['blue']};
    text-decoration: none;
    transition: all 0.5s ease-in;

    &:hover {
      text-decoration: underline;
    }
  }
`
