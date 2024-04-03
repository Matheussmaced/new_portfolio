import styled from 'styled-components'

export const Main = styled.main`
  max-width: 35rem;
`

export const Span = styled.span`
  color: ${(props) => props.theme['green-light']};
  color: ${(props) => props.theme['base-subtitle']};
`

export const AbountText = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3em;

  text-align: left;
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    margin: 2rem 0 2rem;
  }
`
