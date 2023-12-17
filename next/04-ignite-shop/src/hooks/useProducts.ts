import { useContext } from 'react'
import { ProductContext } from '@/contexts/productContext'

export function useProduct() {
  const { cartItems, removeFromCart } = useContext(ProductContext)

  return {
    cartItems,
    totalProductValue: () => {
      return cartItems.reduce((acc, item) => {
        const itemQuantity = Number(item.quantity)
        const itemPrice = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.,]/g, '').replace(',', '.')) : item.price;

        if (!isNaN(itemQuantity) && !isNaN(itemPrice) && item.priceId) {
          return acc + itemQuantity * itemPrice
        } else {
          console.error(
            `Item ${item.id} possui valores inválidos ou priceId indefinido.`
          )
          return acc
        }
      }, 0)
    },

    hasProductOnCart: cartItems.length > 0,
    totalCartProducts: () => {
      return cartItems.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)
    },
    removeCartItem: (id: string) => {
      removeFromCart(id)
    },
  }
}
