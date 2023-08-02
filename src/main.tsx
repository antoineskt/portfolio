import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
