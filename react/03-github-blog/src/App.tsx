import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import Homepage from './pages/home/Homepage'
import { Post } from './pages/post/Index'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:number" element={<Post />} />
      </Routes>

      <GlobalStyle />
    </ThemeProvider>
  )
}
