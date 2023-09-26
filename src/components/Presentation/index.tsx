/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const SectionPresentation = styled.section`
  margin-left: 70px;
  margin-top: 120px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-left: 30px;
  }
`

const H1 = styled.h1`
  font-family: 'Playfair Display';
  line-height: 6rem;
  font-size: 6em;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    line-height: 4rem;
    font-size: 4em;
  }
`

const H2 = styled.h2`
  font-size: 2rem;
  letter-spacing: 1px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const P = styled.p`
  max-width: 450px;
  word-break: break-word;
  font-size: 1.3em;
  margin-top: 16px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const DivButtonContact = styled.div`
  display: flex;
`

const ButtonContact = styled.button<{ $github?: boolean }>`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => (props.$github ? 'white' : 'black')};
  color: ${(props) => (props.$github ? 'black' : 'white')};
  text-transform: uppercase;
  font-family: inherit;
  margin: 0;
  height: 50px;
  padding: 16px 32px;
  font-size: 1em;
  font-weight: 700;
  box-shadow: none;
  cursor: pointer;
  border: 1px solid black;
  outline: 0;
  margin-right: 24px;
  @media (max-width: 768px) {
    font-size: 0.6em;
  }
`
const AncreGit = styled.a`
  color: black;
`
export default function Presentation() {
  const { t } = useTranslation()
  return (
    <SectionPresentation id="home">
      <H1>
        Antoine
        <br /> Billet
      </H1>
      <H2>{t('title')}</H2>
      <P>{t('description')}</P>
      <DivButtonContact>
        <a href="#contact">
          <ButtonContact>{t('contactMe')}</ButtonContact>
        </a>

        <ButtonContact $github>
          <AncreGit href="https://github.com/antoineskt">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="left"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Github
          </AncreGit>
        </ButtonContact>
      </DivButtonContact>
    </SectionPresentation>
  )
}
