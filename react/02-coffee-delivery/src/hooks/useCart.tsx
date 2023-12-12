import { useContext } from 'react'

import { ShoppingCartContext } from '../contexts/productsContext'

export function useCart() {
  return useContext(ShoppingCartContext)
}