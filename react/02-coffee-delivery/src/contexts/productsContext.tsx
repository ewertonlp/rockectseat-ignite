import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'

import { useNavigate } from 'react-router-dom'

import {
  addItemAction,
  checkoutCartAction,
  incrementItemQuantityAction,
  decrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { cartReducer, Item, Order } from '../reducers/cart/reducer'
import { OrderInfo } from '../pages/Cart'

interface ShoppingCartContext {
  cart: Item[]
  incrementItemQuantity: (itemId: Item['id']) => void
  decrementItemQuantity: (ItemId: Item['id']) => void
  addItem: (item: Item) => void
  orders: Order[]
  removeItem: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
}

interface ShoppingCartProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJson = localStorage.getItem('@coffee-delivery-cart')
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }
      return cartState
    },
  )
  const navigate = useNavigate()

  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }
  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJson = JSON.stringify(cartState)
      localStorage.setItem('@coffee-delivery-cart', stateJson)
    }
  }, [cartState])

  return (
    <ShoppingCartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
