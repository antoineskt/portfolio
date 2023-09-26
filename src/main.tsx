import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider } from './utils/context'
import './Lang/i18n' // Importez la configuration d'i18next

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Error />} />
          <Route path="/portfolio" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
