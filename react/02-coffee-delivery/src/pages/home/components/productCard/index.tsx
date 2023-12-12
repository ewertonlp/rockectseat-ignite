import { Control, Order, Price, ProductCardStyle } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useShoppingCart } from '../../../../contexts/productsContext'
import { QuantityInput } from '../../../../components/form/quantityInput'
import { useEffect, useState } from 'react'
import { CheckFat } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

type Props = {
  coffee: {
    id: string
    image: string
    type: string[]
    title: string
    description: string
    price: number
    quantity: number
  }
}

export function ProductCard({ coffee }: Props) {
  const { addItem } = useShoppingCart()
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const theme = useTheme()

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <ProductCardStyle key={coffee.id}>
      <img src={coffee.image} alt={coffee.title} />
      <span className="tag">{coffee.type}</span>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order $itemAdded={isItemAdded}>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors['base-card']}
              />
            ) : (
              <ShoppingCart size={22} color={theme.colors['base-card']} />
            )}
          </button>
        </Order>
      </Control>
    </ProductCardStyle>
  )
}
