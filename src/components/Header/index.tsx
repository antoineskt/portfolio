// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'
import { ReactComponent as Logoab } from '../../assets/logoab.svg'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../utils/context'

export default function Header() {
  const [visible, setVisible] = useState(false)
  const { toggleTheme, theme } = useContext(ThemeContext)

  const HeaderDiv = styled.header`
    display: flex;
    height: 60px;
    width: 100%;
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
  `

  const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
  `

  const Nav = styled.nav`
    visibility: ${visible === true ? 'visible' : 'hidden'};
    position: fixed;
    width: 300px;
    background: red;
    right: 0;
    top: 0;
    margin: 0;
    height: 100%;
    background-color: white;
    transform: ${visible === true ? 'translateX(0%);' : 'translateX(105%);'};
    transition: transform 1s;
  `

  const DivLogo = styled.div`
    > * {
      height: 3em;
      width: 3em;
    }
  `

  const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;
  `

  const DivUl = styled.div`
    justify-content: space-between;
    height: calc(100% - 64px);
    padding: 32px 0;
  `

  const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `

  return (
    <HeaderDiv>
      <DivLogo>
        <Logoab />
      </DivLogo>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
      <Button onClick={() => setVisible(true)}>
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
      </Button>
      <Nav>
        <div>
          <Button onClick={() => setVisible(false)}>
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
          </Button>
        </div>
        <DivUl>
          <Ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </Ul>
        </DivUl>
      </Nav>
    </HeaderDiv>
  )
}
