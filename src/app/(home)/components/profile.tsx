import { Link } from 'react-scroll'
import {
  Github,
  Icons,
  Informs,
  Instagram,
  Linkedin,
  Links,
  Main,
  MainContainerFixed,
  SpanLinks,
} from '../styles/profile'

export default function Profile() {
  return (
    <MainContainerFixed>
      <Main>
        <h1>Matheus Gregorio</h1>

        <h3>Desenvolvedor FullStack</h3>

        <p>
          Desenvolvo experiências digitais impecáveis, cativantes e inclusivas.
        </p>

        <Informs>
          <Link to="about" smooth={true} duration={500} offset={-50}>
            <Links>
              <SpanLinks></SpanLinks>
              <p>SOBRE</p>
            </Links>
          </Link>

          <Link to="projects" smooth={true} duration={500} offset={-50}>
            <Links>
              <SpanLinks></SpanLinks>
              <p>PROJETOS</p>
            </Links>
          </Link>

          <Link to="technologys" smooth={true} duration={500} offset={-50}>
            <Links>
              <SpanLinks></SpanLinks>
              <p>TECNOLOGIAS</p>
            </Links>
          </Link>
        </Informs>

        <Icons>
          <a href="https://github.com/Matheussmaced" target="_blank">
            <Github size={35} />
          </a>

          <a
            href="https://www.linkedin.com/in/matheus-gregorio-472607275/"
            target="_blank"
          >
            <Linkedin size={35} />
          </a>

          <a href="https://www.instagram.com/mateusmaced_/" target="_blank">
            <Instagram size={35} />
          </a>
        </Icons>
      </Main>
    </MainContainerFixed>
  )
}
