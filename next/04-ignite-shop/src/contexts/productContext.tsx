import { createContext, ReactNode, useEffect, useState } from 'react'

export interface ProductData {
  id: string
  name: string
  imageUrl: string
  description: string
  price: number
  quantity: number
  priceId: string
}

interface ProductContextData {
  cartItems: ProductData[]
  AddCartProduct: (product: ProductData) => void
  removeFromCart: (id: string) => void
}

interface ProductProviderProps {
  children: ReactNode
  product: any
}

export const ProductContext = createContext({} as ProductContextData)

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [cartItems, setCartItems] = useState<ProductData[]>([])

  function AddCartProduct(product: ProductData) {
    const productOnCart = cartItems.find((cartItems) => {
      return cartItems.id === product.id
    })

    if (productOnCart) {
      const productList = cartItems.map((cartItems) => {
        if (cartItems.id === product.id) {
          return {
            ...product,
            quantity: cartItems.quantity + product.quantity,
          }
        } else {
          return { ...cartItems }
        }
      })
      setCartItems(productList)
      return
    } else {
      setCartItems((state) => [...state, product])
      return
    }
  }

  const removeFromCart = (id: string) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  // const loadCartFromLocalStorage = () => {
  //   const savedCart = localStorage.getItem('cart')

  //   if (savedCart) {
  //     const parsedCart = JSON.parse(savedCart)
  //     setCartItems(parsedCart)
  //   }
  // }

  // useEffect(() => {
  //   loadCartFromLocalStorage()
  // }, [])

  // const addToCart = (product: ProductData) => {
  //   setCartItems((currentItems) => {
  //     const updatedCart = [...currentItems, product]
  //     localStorage.setItem('cart', JSON.stringify(updatedCart))
  //     return updatedCart
  //   })
  // }

  return (
    <ProductContext.Provider value={{ cartItems, AddCartProduct, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  )
}
