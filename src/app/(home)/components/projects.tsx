import {
  Images,
  LinksTitle,
  MainContainerProjects,
  TechnologyContainer,
} from '../styles/projects'

interface ProjectsProps {
  picture: string
  URLReposity: string
  title: string
  description: string
  technology: string[]
}

export default function Projects({
  picture,
  URLReposity,
  title,
  description,
  technology,
}: ProjectsProps) {
  return (
    <>
      <MainContainerProjects>
        <Images src={picture} alt="" width={150} height={100} quality={100} />

        <div>
          <LinksTitle href={URLReposity} target="_blank">
            <h4>{title}</h4>
          </LinksTitle>

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
