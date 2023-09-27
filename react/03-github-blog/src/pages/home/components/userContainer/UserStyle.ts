import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  background: ${(props) => props.theme['base-background']};
  box-shadow: 1px 2px 20px rgba(0, 0, 0, 0.25);
  max-width: 54rem;
  width: 100%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2rem;
  position: relative;
  z-index: 999;

  img {
    width: 148px;
    border-radius: 8px;
  }

  @media (min-width: 375px) {
    padding: 1.5rem 1rem;
    margin: -5rem auto;
    gap: 1rem;
  }
  @media (min-width: 768px) {
    padding: 2rem;
    gap: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem;
    margin: -5.5rem auto;
    gap: 2rem;
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
    text-underline-offset: 6px;

    &:hover {
      text-decoration: underline;
    }
  }

  .icon-link:hover {
    text-decoration: underline;
  }
`
