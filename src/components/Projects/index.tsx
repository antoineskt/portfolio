/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'
import flowscreen from './Images/flowscreen.png'

const SectionProject = styled.section`
  background-color: white;
  margin-top: 70px;

  width: 100%;
`

const H1 = styled.h1`
  font-size: 3em;
  margin-left: 70px;
  margin-bottom: 50px;
`

const DivAllProject = styled.div`
  margin-left: 70px;
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
`

const DivInsightProject = styled.div`
  position: absolute;
  padding: 4.5rem 2.75rem 1.2rem;
  bottom: 0;
  color: white;
  font-size: 1.2em;
`

const DivUnderImage = styled.div``

const Span = styled.span`
  background-color: black;
  color: white;
  border-radius: 20px;
  padding: 7px 13px;
  margin-right: 10px;
  box-shadow: 0 1px 1px 1px hotpink;
`

export default function Project() {
  return (
    <SectionProject>
      <H1>Mes projects</H1>
      <DivAllProject>
        <DivOneProject>
          <A href="https://github.com/antoineskt/Weekly-Agenda.git">
            <DivImageProject>
              <Img src={flowscreen} alt="agenda" />
              <DivInsightProject>
                <h2>Flow</h2>
                <div>Agenda de semaine en temps réel pour suivre ses objectifs simplement</div>
              </DivInsightProject>
            </DivImageProject>
          </A>
          <DivUnderImage>
            <a href="https://github.com/antoineskt/Weekly-Agenda.git">
              <Span>Github</Span>
            </a>
            <Span>React</Span>
            <Span>Styled Components</Span>
          </DivUnderImage>
        </DivOneProject>

        <DivOneProject>
          <A href="https://github.com/antoineskt/Application-mobile-en-ReactNative">
            <DivImageProject>
              <Img src={flowscreen} alt="agenda" />
              <DivInsightProject>
                <h2>Habit tracker</h2>
                <div>
                  Application mobile en React Native. L'app permet de s'identifier et de suivre ses objectifs en temps
                  reéel
                </div>
              </DivInsightProject>
            </DivImageProject>
          </A>
          <DivUnderImage>
            <a href="https://github.com/antoineskt/Application-mobile-en-ReactNative">
              <Span>Github</Span>
            </a>
            <Span>React Native</Span>
            <Span>Express</Span>
            <Span>Sequelize</Span>
            <Span>MySQL</Span>
          </DivUnderImage>
        </DivOneProject>

        <DivOneProject>
          <A href="https://github.com/antoineskt/Weekly-Agenda.git">
            <DivImageProject>
              <Img src={flowscreen} alt="agenda" />
              <DivInsightProject>
                <h2>Flow</h2>
                <div>Agenda de semaine en temps réel pour suivre ses objectifs simplement</div>
              </DivInsightProject>
            </DivImageProject>
          </A>
          <DivUnderImage>
            <a href="https://github.com/antoineskt/Weekly-Agenda.git">
              <Span>Github</Span>
            </a>
            <Span>React</Span>
            <Span>Styled Components</Span>
          </DivUnderImage>
        </DivOneProject>
      </DivAllProject>
    </SectionProject>
  )
}
