import Link from 'next/link'
import {
  Github,
  Icons,
  Informs,
  Instagram,
  Linkedin,
  Links,
  Main,
  SpanLinks,
} from '../styles/profile'

export default function Profile() {
  return (
    <>
      <Main>
        <h1>Matheus Gregorio</h1>

        <h3>Desenvolvedor FullStack</h3>

        <p>
          Desenvolvo experiências digitais impecáveis, cativantes e inclusivas.
        </p>

        <Informs>
          <Links>
            <SpanLinks></SpanLinks>
            <p>SOBRE</p>
          </Links>

          <Links>
            <SpanLinks></SpanLinks>
            <p>PROJETOS</p>
          </Links>
        </Informs>

        <Icons>
          <Link href="https://github.com/Matheussmaced" target="_blank">
            <Github size={35} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/matheus-gregorio-472607275/"
            target="_blank"
          >
            <Linkedin size={35} />
          </Link>

          <Link href="https://www.instagram.com/mateusmaced_/" target="_blank">
            <Instagram size={35} />
          </Link>
        </Icons>
      </Main>
    </>
  )
}
