// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'
import { ReactComponent as Logoab } from '../../assets/logoab.svg'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { sun, moon } from '../../assets/lights'

const DivHeaderAndMenuOverlay = styled.div`
  z-index: 10;
  top: 0;
`

const DivMenuOverlay = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible === true ? 'block' : 'none')};
  opacity: ${({ $visible }) => ($visible === true ? '1' : '0')};
  position: fixed;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
`

const HeaderDiv = styled.header`
  display: flex;
  height: 60px;
  width: 100%;
  padding: 0 30px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`

const DivLogo = styled.div`
  > * {
    height: 3em;
    width: 3em;
  }
`

const ButtonDarkTheme = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: black;
`
const ButtonMenuBurger = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
`
const Nav = styled.nav<{ $visible: boolean }>`
  visibility: ${({ $visible }) => ($visible === true ? 'visible' : 'hidden')};
  position: fixed;
  width: 300px;
  right: 0;
  top: 0;
  margin: 0;
  height: 100%;
  background-color: white;
  transform: ${({ $visible }) => ($visible === true ? 'translateX(0%);' : 'translateX(105%);')};
  transition: transform 1s;
  z-index: 10;
  @media (max-width: 768px) {
  }
`

const ButtonMenuBurgerClose = styled.div`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
`
const DivButtonCloseMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`
const DivUl = styled.div`
  z-index: 10;

  @media (max-width: 768px) {
  }
`
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5em;
  @media (max-width: 768px) {
    padding-right: 40px;
  }
`

const A = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: red;
  }
  @media (max-width: 768px) {
  }
`
export default function Header() {
  const [visible, setVisible] = useState<boolean>(false)
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <DivHeaderAndMenuOverlay>
      <HeaderDiv>
        <DivLogo>
          <Logoab />
        </DivLogo>
        <ul>
          <ButtonDarkTheme onClick={() => toggleTheme()}>{theme === 'light' ? moon : sun}</ButtonDarkTheme>
          <ButtonMenuBurger onClick={() => setVisible(true)}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </ButtonMenuBurger>
        </ul>

        <Nav $visible={visible}>
          <DivButtonCloseMenu>
            <ButtonMenuBurgerClose onClick={() => setVisible(false)}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </ButtonMenuBurgerClose>
          </DivButtonCloseMenu>
          <DivUl>
            <Ul>
              <li>
                <A onClick={() => setVisible(false)} href="#home">
                  Home
                </A>
              </li>
              <li>
                <A onClick={() => setVisible(false)} href="#apropos">
                  About
                </A>
              </li>
              <li>
                <A onClick={() => setVisible(false)} href="#services">
                  Services
                </A>
              </li>
              <li>
                <A onClick={() => setVisible(false)} href="#projets">
                  Projets
                </A>
              </li>
              <li>
                <A onClick={() => setVisible(false)} href="#competence">
                  Compétences
                </A>
              </li>
              <li>
                <A onClick={() => setVisible(false)} href="#contact">
                  Contact
                </A>
              </li>
            </Ul>
          </DivUl>
        </Nav>
      </HeaderDiv>
      <DivMenuOverlay $visible={visible}></DivMenuOverlay>
    </DivHeaderAndMenuOverlay>
  )
}
