import styled from 'styled-components'

export const MainContainerProjects = styled.main`
  display: flex;
  gap: 1rem;

  line-height: 1.5em;
  max-width: 35rem;
  margin-top: 3rem;

  h2 {
    text-align: center;
  }

  h4 {
    font-size: 1.5rem;
    margin: 1rem 0 1rem;
  }
`

export const TechnologyContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.8rem;

  text-align: center;

  padding: 1rem 1rem;
  border-radius: 2rem;

  background-color: ${(props) => props.theme['base-label']};

  span {
    margin: auto;
  }
`
