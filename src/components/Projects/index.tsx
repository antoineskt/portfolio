/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'
import flowScreenOk from './Images/FlowScreenOk.png'
import agendascreen from './Images/agendascreen.png'
import books from './Images/books.png'
import illuvium from './Images/illuvium.png'
import itrack from './Images/itrack.png'
import CardOneProject from '../CardOneProject'
import { useTranslation } from 'react-i18next'

const SectionProject = styled.section`
  background-color: white;
  margin-top: 70px;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const H1 = styled.h1`
  font-size: 3em;
  margin-left: 70px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const DivAllProject = styled.div`
  margin-left: 70px;
  @media (max-width: 768px) {
    margin-left: 15px;
  }
`

export default function Project() {
  const { t } = useTranslation()
  return (
    <SectionProject id="projets">
      <H1>Mes projets</H1>
      <DivAllProject>
        <CardOneProject
          githubLink="https://i-track-one.vercel.app/"
          imageUrl={itrack}
          altTitle="itrack"
          title="iTrack"
          description={t('projects.descriptionOne')}
          technoUsed={['Next', 'Styled Components']}
          colorReverse={true}
        />

        <CardOneProject
          githubLink="https://weeklyagenda.netlify.app/"
          imageUrl={agendascreen}
          altTitle="agenda"
          title="Agenda"
          description={t('projects.descriptionTwo')}
          technoUsed={['React', 'Styled Components']}
          colorReverse={false}
        />
        <CardOneProject
          githubLink="https://github.com/antoineskt/Application-mobile-en-ReactNative"
          imageUrl={flowScreenOk}
          altTitle="agenda"
          title="Habit Tracker"
          description={t('projects.descriptionThird')}
          technoUsed={['React Native ', 'Express', 'Sequelize', 'mySql', 'Figma']}
          colorReverse={false}
        />

        <CardOneProject
          githubLink="https://librairie.netlify.app/"
          imageUrl={books}
          altTitle="books"
          title="BookSearch"
          description={t('projects.descriptionFourth')}
          technoUsed={['JavaScript', 'Html Css', 'API']}
          colorReverse={false}
        />

        <CardOneProject
          githubLink="https://github.com/antoineskt/illuvium"
          imageUrl={illuvium}
          altTitle="books"
          title="Maquette"
          description={t('projects.descriptionFivth')}
          technoUsed={['HTML', 'CSS']}
          colorReverse={false}
        />
      </DivAllProject>
    </SectionProject>
  )
}
