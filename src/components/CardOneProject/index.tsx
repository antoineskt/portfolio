import styled from 'styled-components'

const DivOneProject = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`
const A = styled.a`
  position: relative;
  display: block;
  border-radius: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
  }
`

const DivImageProject = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;

  overflow: hidden;
  @media (max-width: 768px) {
    width: 335px;
    height: 230px;
    background-color: black;
  }
`

const Img = styled.img`
  border: 2px solid hotpink;
  border-radius: 10px;
  filter: blur(0.5px);
  transition: transform 0.5s;
  &:hover {
    filter: blur(0.1px);

    border: 4px solid #5dfff2;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border: none;
    filter: none;
    &:hover {
      border: none;
      filter: none;
    }
  }
`

const DivInsightProject = styled.div<{ colorReverse: boolean }>`
  position: absolute;
  padding: 4.5rem 2.75rem 1.2rem;
  bottom: 0;
  color: ${(props) => (props.colorReverse ? 'black' : 'white')};
  font-size: 1.2em;
  @media (max-width: 768px) {
    font-size: 0.75em;
    color: white;
  }
`

const DivUnderImage = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`

const Span = styled.span`
  background-color: black;
  color: white;
  border-radius: 20px;
  padding: 7px 13px;
  margin-right: 10px;
  box-shadow: 0 1px 1px 1px hotpink;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-right: 30px;
    display: inline-flex;
    align-items: center;
    margin-bottom: 7px;
  }
`

// Définition des types
interface ProjectCardProps {
  githubLink: string
  imageUrl: string
  altTitle: string
  title: string
  description: string
  technoUsed: string[]
  colorReverse: boolean
}

export default function CardOneProject({
  githubLink,
  imageUrl,
  altTitle,
  title,
  description,
  technoUsed,
  colorReverse,
}: ProjectCardProps) {
  return (
    <DivOneProject>
      <A target="_blank" href={githubLink}>
        <DivImageProject>
          <Img src={imageUrl} alt={altTitle} />
          <DivInsightProject colorReverse={colorReverse}>
            <h2>{title}</h2>
            <div>{description}</div>
          </DivInsightProject>
        </DivImageProject>
      </A>
      <DivUnderImage>
        <a target="_blank" href={githubLink} rel="noreferrer">
          <Span>Github</Span>
        </a>
        {technoUsed.map((tech, index) => (
          <Span key={index}>{tech}</Span>
        ))}
      </DivUnderImage>
    </DivOneProject>
  )
}
