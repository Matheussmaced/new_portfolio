import styled from 'styled-components'

export const TitleContainer = styled.div`
  text-align: center;
  margin-top: 5rem;

  h2 {
    color: ${(props) => props.theme['green-light']};
    font-size: 1.8rem;
  }
`

export const Main = styled.main`
  margin: 4rem auto;
  width: 70rem;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    display: block;
    width: 90%;
  }
`
