import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CardItemsContainer,
  CardItemsContent,
  CardItemsNumber,
  InputAmount,
} from './styles'
import { useShoppingCart } from '../../../../contexts/productsContext'
import { products } from '../../../../services/products'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useEffect } from 'react'

type CartItemProps = {
  id: number
  quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
  const { incrementCartQuantity, decrementCartQuantity, removeFromCart } =
    useShoppingCart()

  const item = products.find((i) => i.id === id)
  if (item == null) return null

  // const [itemQuantity, setItemQuantity] = useState(quantity)

  // useEffect(() => {
  //   setTotalItemPrice(parseFloat(price) * itemQuantity)
  // }, [itemQuantity, price])

  // const formattedTotalItemPrice = totalItemPrice.toLocaleString('pt-BR', {
  //   style: 'currency',
  //   currency: 'BRL',
  // })

  // const cartItemCount = cartItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // )

  return (
    <CardItemsContainer key={item.id}>
      <div>
        <img src={item.image} alt="" />
      </div>
      <CardItemsContent>
        <h5>{item.name}</h5>
        <CardItemsNumber>
          <InputAmount>
            <button onClick={() => decrementCartQuantity(id)}>
              <Minus />
            </button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => incrementCartQuantity(id)}>
              <Plus />
            </button>
          </InputAmount>

          <button type="button" onClick={() => removeFromCart(item.id)}>
            <Trash /> Remover
          </button>
        </CardItemsNumber>
      </CardItemsContent>

      <strong>{formatCurrency(item.price * quantity)}</strong>
    </CardItemsContainer>
  )
}
