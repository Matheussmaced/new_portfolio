import Image from 'next/image'
import styled from 'styled-components'

export const Main = styled.div`
  margin-top: 5rem;
  text-align: center;

  h3 {
    color: ${(props) => props.theme['green-light']};
    font-size: 1.8rem;
  }
`

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  justify-content: center;
  align-items: center;
  place-items: center;

  margin-top: 3rem;
`

export const Images = styled(Image)`
  filter: drop-shadow(4px 5px 3px black);
`
