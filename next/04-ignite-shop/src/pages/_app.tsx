import { GlobalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { Container, Header } from '@/styles/pages/app'
import Nav from '@/components/nav'
import { useState } from 'react'
import ShoppingCart from '@/components/shoppingCart'
import { ProductProvider } from '@/contexts/productContext'

GlobalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleCartButtonClick = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <Container>
      <ProductProvider productData={pageProps.productData}>
        <Header>
          <Nav onCartButtonClick={handleCartButtonClick} />
        </Header>
        <Component {...pageProps} />
        <ShoppingCart  isOpen={isCartOpen} onClose={handleCartButtonClick} />
      </ProductProvider>
    </Container>
  )
}
