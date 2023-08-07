/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'
import flowScreenOk from './Images/FlowScreenOk.png'
import agendascreen from './Images/agendascreen.png'
import books from './Images/books.png'
import illuvium from './Images/illuvium.png'

const SectionProject = styled.section`
  background-color: white;
  margin-top: 70px;

  width: 100%;
`

const H1 = styled.h1`
  font-size: 3em;
  margin-left: 70px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`

const DivAllProject = styled.div`
  margin-left: 70px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`

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
    -ms-transform: scale(1.05); /* IE 9 */
    -webkit-transform: scale(1.05); /* Safari 3-8 */
    transform: scale(1.05);
    border: 4px solid #5dfff2;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border: none;
  }
`

const DivInsightProject = styled.div`
  position: absolute;
  padding: 4.5rem 2.75rem 1.2rem;
  bottom: 0;
  color: white;
  font-size: 1.2em;
  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`

const DivUnderImage = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    align-items: start;
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
    font-size: 0.7rem;
  }
`

export default function Project() {
  return (
    <SectionProject id="projets">
      <H1>Mes projects</H1>
      <DivAllProject>
        <DivOneProject>
          <A target="_blank" href="https://github.com/antoineskt/Weekly-Agenda.git">
            <DivImageProject>
              <Img src={agendascreen} alt="agenda" />
              <DivInsightProject>
                <h2>Agenda</h2>
                <div>Agenda de semaine en temps réel pour suivre ses objectifs simplement</div>
              </DivInsightProject>
            </DivImageProject>
          </A>
          <DivUnderImage>
            <a target="_blank" href="https://github.com/antoineskt/Weekly-Agenda.git" rel="noreferrer">
              <Span>Github</Span>
            </a>
            <Span>React</Span>
            <Span>Styled Components</Span>
          </DivUnderImage>
        </DivOneProject>

        <DivOneProject>
          <A target="_blank" href="https://github.com/antoineskt/Application-mobile-en-ReactNative">
            <DivImageProject>
              <Img src={flowScreenOk} alt="agenda" />
              <DivInsightProject>
                <h2>Habit Tracker</h2>
                <div>
                  Application mobile en React Native. L'app permet de s'identifier et de suivre ses objectifs en temps
                  reél
                </div>
              </DivInsightProject>
            </DivImageProject>
          </A>
          <DivUnderImage>
            <a target="_blank" href="https://github.com/antoineskt/Application-mobile-en-ReactNative" rel="noreferrer">
              <Span>Github</Span>
            </a>
            <Span>React Native</Span>
            <Span>Express</Span>
            <Span>Sequelize</Span>
            <Span>MySQL</Span>
            <Span>Figma</Span>
          </DivUnderImage>
        </DivOneProject>

        <DivOneProject>
          <A target="_blank" href="https://github.com/antoineskt/Booksearch">
            <DivImageProject>
              <Img src={books} alt="books" />
              <DivInsightProject>
                <h2>BookSearch</h2>
                <div>Utilisation d'une API de recherche de livre</div>
              </DivInsightProject>
            </DivImageProject>
          </A>
          <DivUnderImage>
            <a target="_blank" href="https://github.com/antoineskt/Booksearch" rel="noreferrer">
              <Span>Github</Span>
            </a>
            <Span>JavaScript</Span>
            <Span>Html Css</Span>
            <Span>API</Span>
          </DivUnderImage>
        </DivOneProject>

        <DivOneProject>
          <A target="_blank" href="https://github.com/antoineskt/illuvium">
            <DivImageProject>
              <Img src={illuvium} alt="books" />
              <DivInsightProject>
                <h2>Maquette</h2>
                <div>Reproduction simple d'une page vitrine d'un site en html css</div>
              </DivInsightProject>
            </DivImageProject>
          </A>
          <DivUnderImage>
            <a target="_blank" href="https://github.com/antoineskt/illuvium" rel="noreferrer">
              <Span>Github</Span>
            </a>
            <Span>HTML</Span>
            <Span>CSS</Span>
          </DivUnderImage>
        </DivOneProject>
      </DivAllProject>
    </SectionProject>
  )
}
