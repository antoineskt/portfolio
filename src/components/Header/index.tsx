// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'
import { ReactComponent as Logoab } from '../../assets/logoab.svg'

export default function Header() {
  const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const DivLogo = styled.div`
    > * {
      height: 5em;
      width: 5em;
    }
  `

  return (
    <Nav>
      <DivLogo>
        <Logoab />
      </DivLogo>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Nav>
  )
}
