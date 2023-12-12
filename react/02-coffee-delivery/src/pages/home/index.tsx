import { Hero } from './components/hero'
import { ProductCard } from './components/productCard'
import { CardsContainer, CoffeeList } from './styles'

import { products } from '../../services/products'

export interface Products {
  id: string
  image: string
  type: string[]
  name: string
  description: string
  price: number
  quantity: number
}

export function Home() {
  return (
    <>
      <Hero />
      <CardsContainer>
        <CoffeeList>
          <h2>Nossos cafés</h2>
          <div>
            {products.map((product) => (
              <ProductCard key={product.id} coffee={product} />
            ))}
          </div>
        </CoffeeList>
      </CardsContainer>
    </>
  )
}
