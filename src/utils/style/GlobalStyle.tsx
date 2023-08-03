import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'

const StyledGlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
    * {
        box-sizing: border-box;
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
      margin: 0;
    }

    body {
      // Ici cette syntaxe revient au même que
        //background-color: $ { ({ props }) => (props.isDarkmode ?  qsdjqkdsq : qsdjqkldq)
        
        background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
       
    }

    
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
