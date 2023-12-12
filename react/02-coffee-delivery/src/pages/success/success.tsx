import {
  BgCurrency,
  BgPin,
  BgTimer,
  Container,
  DeliveryContent,
  DeliveryImage,
  DeliveryInfo,
} from './styles'
import deliveryImage from '../../assets/delivery.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

export const Success = () => {
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }
  // const theme = useTheme()

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <DeliveryContent>
        <DeliveryInfo>
          <ul>
            <li>
              <BgPin>
                <MapPin weight="fill" />
              </BgPin>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {orderInfo.address}, {orderInfo.number}
                  </strong>
                </p>
                <span>
                  {orderInfo.neighborhood} - {orderInfo.city},{orderInfo.state}
                </span>
              </div>
            </li>
            <li>
              <BgTimer>
                <Timer weight="fill" />
              </BgTimer>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 - 30 min</strong>
              </div>
            </li>
            <li>
              <BgCurrency>
                <CurrencyDollar weight="fill" />
              </BgCurrency>
              <div>
                <p>Pagamento na entrega</p>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </li>
          </ul>
        </DeliveryInfo>

        <DeliveryImage src={deliveryImage} alt="" />
      </DeliveryContent>
    </Container>
  )
}
