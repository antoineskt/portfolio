// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'
import { ReactComponent as Logoab } from '../../assets/logoab.svg'
import { useState } from 'react'

export default function Header() {
  const [visible, setVisible] = useState(false)

  const HeaderDiv = styled.header`
    display: flex;
    height: 60px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: white;
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
      height: 5em;
      width: 5em;
    }
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
      <button onClick={() => setVisible(true)}>=</button>
      <Nav>
        <div>
          <button onClick={() => setVisible(false)}>X</button>
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
