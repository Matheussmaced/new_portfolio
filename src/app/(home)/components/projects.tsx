import Image from 'next/image'
import { MainContainerProjects, TechnologyContainer } from '../styles/projects'

interface ProjectsProps {
  picture: string
  title: string
  description: string
  technology: string[]
}

export default function Projects({
  picture,
  title,
  description,
  technology,
}: ProjectsProps) {
  return (
    <>
      <MainContainerProjects>
        <Image src={picture} alt="" width={150} height={100} quality={100} />

        <div>
          <h4>{title}</h4>

          <p>{description} </p>

          <TechnologyContainer>
            {technology.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </TechnologyContainer>
        </div>
      </MainContainerProjects>
    </>
  )
}
