/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'

const SectionProject = styled.section`
  background-color: white;
  margin-top: 70px;

  width: 100%;
`

const H1 = styled.h1`
  font-size: 3em;
`

export default function Project() {
  return (
    <SectionProject>
      <H1>Mes projects</H1>
      <div>
        <div>
          <h2>Agenda</h2>
          <a href="https://github.com/antoineskt/Weekly-Agenda.git">c</a>
          <a href="https://github.com/antoineskt/Weekly-Agenda.git">Github</a>
        </div>
      </div>
    </SectionProject>
  )
}
