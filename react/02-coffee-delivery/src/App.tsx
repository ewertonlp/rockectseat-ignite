import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { ShoppingCartProvider } from './contexts/productsContext'
// import { PurchaseOrderProvider } from './contexts/purchaseOrderContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router />
          <GlobalStyle />
        </ShoppingCartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
