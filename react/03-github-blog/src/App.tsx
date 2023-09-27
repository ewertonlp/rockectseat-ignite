import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import Homepage from './pages/home/Homepage'
import { Post } from './pages/post/Index'
import { ContextProvider } from './contexts/Context'
import { useState } from 'react'

export function App() {
  const [inputData, setInputData] = useState('')
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContextProvider inputData={inputData} setInputData={setInputData}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/post/:number" element={<Post />} />
        </Routes>
      </ContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
