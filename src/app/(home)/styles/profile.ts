import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import styled from 'styled-components'

export const MainContainerFixed = styled.div`
  position: relative;
`

export const Main = styled.main`
  position: fixed;

  line-height: 3rem;
`

export const Informs = styled.div`
  margin-top: 2rem;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  width: 13rem;

  gap: 1rem;
  cursor: pointer;
  opacity: 0.3;

  &:hover {
    transition: transform 0.2s ease;
    transform: scale(1.2);
    transform-origin: left;

    opacity: 1;
  }
`

export const SpanLinks = styled.span`
  width: 3rem;
  height: 0.2rem;

  background-color: ${(props) => props.theme['base-span']};
`

export const Icons = styled.div`
  position: fixed;
  display: flex;
  align-items: center;

  bottom: 5rem;
  left: 0;

  gap: 1rem;
  left: calc(50% - 31.25rem);

  cursor: pointer;
`

export const Github = styled(GithubIcon)`
  padding: 0.3rem;
  border-radius: 100%;

  background-color: ${(props) => props.theme['base-label']};

  transition: 1s;
  opacity: 0.7;

  &:hover {
    transition: 1s;
    transform: scale(1.2);
    opacity: 1;
  }
`

export const Linkedin = styled(LinkedinIcon)`
  padding: 0.3rem;
  border-radius: 100%;

  background-color: ${(props) => props.theme['base-label']};

  transition: 1s;
  opacity: 0.7;

  &:hover {
    transition: 1s;
    transform: scale(1.2);
    opacity: 1;
  }
`

export const Instagram = styled(InstagramIcon)`
  padding: 0.3rem;
  border-radius: 100%;

  background-color: ${(props) => props.theme['base-label']};

  transition: 1s;
  opacity: 0.7;

  &:hover {
    transition: 1s;
    transform: scale(1.2);
    opacity: 1;
  }
`
