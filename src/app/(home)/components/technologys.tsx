import { Icons, Images, Main } from '../styles/technologys'

export default function Technologys() {
  return (
    <Main>
      <h3>Tecnologias</h3>

      <Icons>
        <Images src="/icons8-html-5-150.png" alt="" width={80} height={85} />
        <Images src="/icons8-css-240.png" alt="" width={80} height={90} />
        <Images
          src="/icons8-javascript-150.png"
          alt=""
          width={80}
          height={90}
        />
        <Images
          src="/icons8-texto-datilografado-150.png"
          alt=""
          width={80}
          height={90}
        />
        <Images
          src="/icons8-react-native-68.png"
          alt=""
          width={90}
          height={90}
        />
        <Images src="/icons8-nextjs-240.png" alt="" width={90} height={90} />
        <Images src="/icons8-nodejs-256.png" alt="" width={80} height={90} />
        <Images src="/icons8-docker-150.png" alt="" width={80} height={90} />
      </Icons>
    </Main>
  )
}
