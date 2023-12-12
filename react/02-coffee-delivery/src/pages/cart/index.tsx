import { Fragment } from 'react'
import { products } from '../../services/products'
import { formatCurrency } from '../../utils/formatCurrency'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import {
  ButtonContainer,
  CartCheckoutButton,
  CartContainer,
  CartForm,
  CartItemList,
  CartItemsContainer,
  CartPaymentDetails,
  CartPaymentDetailsList,
  CartPaymentOptions,
  Coffee,
  CoffeeInfo,
  InputWrapper,
  PaymentErrorMessage,
} from './styles'

import { z } from 'zod'
import { useCart } from '../../hooks/useCart'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Radio } from '../../components/form/radio'
import { QuantityInput } from '../../components/form/quantityInput'

type FormInputs = {
  cep: number
  address: string
  number: string
  addressComplement: string | void
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  address: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem,
  } = useCart()

  const coffeeCart = cart.map((item) => {
    const coffeeInfo = products.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Café inválido')
    }
    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeeCart.reduce((prevValue, currentItem) => {
    return (prevValue += currentItem.price * currentItem.quantity)
  }, 0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleItemDelete(itemId: string) {
    removeItem(itemId)
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso adicionar pelo menos um item no carrinho')
    }
    checkout(data)
  }

  const deliveryFee = 3.5

  // const orderData = {
  //   deliveryAt: address,
  //   paymentType,
  //   orderItems: cartItems,
  //   total: totalCartPrice,
  // }

  // function handleNewOrder() {
  //   newPurchaseOrder(orderData)
  // }

  return (
    <CartContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <CartForm>
            <h4>
              <MapPinLine size={22} />
              Endereço de Entrega
            </h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <input
              type="number"
              placeholder="CEP"
              error={errors.cep}
              {...register('cep', { valueAsNumber: true })}
              required
              style={{ width: '200px' }}
            />
            <input
              type="text"
              placeholder="Rua"
              required
              style={{ width: '100%' }}
              error={errors.address}
              {...register('address')}
            />
            <InputWrapper>
              <input
                type="number"
                placeholder="Número"
                required
                style={{ width: '200px' }}
                error={errors.number}
                {...register('number')}
              />
              <input
                type="text"
                placeholder="Complemento"
                style={{ width: '350px' }}
                error={errors.addressComplement}
                {...register('addressComplement')}
              />
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                placeholder="Bairro"
                required
                style={{ width: '200px' }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <input
                type="text"
                placeholder="Cidade"
                style={{ width: '276px' }}
                required
                error={errors.city}
                {...register('city')}
              />
              <input
                type="text"
                placeholder="UF"
                required
                style={{ width: '60px' }}
                error={errors.state}
                {...register('state')}
              />
            </InputWrapper>

            <CartPaymentOptions>
              <h4>
                <CurrencyDollar size={22} />
                Pagamento
              </h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
              <ButtonContainer>
                <div>
                  <Radio
                    isSelected={selectedPaymentMethod === 'credit'}
                    {...register('paymentMethod')}
                    value="credit"
                  >
                    <CreditCard size={16} />
                    <span>Cartão de crédito</span>
                  </Radio>

                  <Radio
                    isSelected={selectedPaymentMethod === 'debit'}
                    {...register('paymentMethod')}
                    value="debit"
                  >
                    <Bank size={16} />
                    <span>Cartão de débito</span>
                  </Radio>

                  <Radio
                    isSelected={selectedPaymentMethod === 'cash'}
                    {...register('paymentMethod')}
                    value="cash"
                  >
                    <Money size={16} />
                    <span>Dinheiro</span>
                  </Radio>
                </div>
                {errors.paymentMethod ? (
                  <PaymentErrorMessage role="alert">
                    {errors.paymentMethod.message}
                  </PaymentErrorMessage>
                ) : null}
              </ButtonContainer>
            </CartPaymentOptions>
          </CartForm>
        </form>
      </div>

      <CartItemsContainer>
        <h2>Cafés selecionados</h2>
        <CartItemList>
          {coffeeCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <Coffee>
                <div>
                  <img src={coffee.image} alt={coffee.title} />

                  <div>
                    <span>{coffee.title}</span>

                    <CoffeeInfo>
                      <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantity={() => handleItemIncrement(coffee.id)}
                        decrementQuantity={() => handleItemDecrement(coffee.id)}
                      />

                      <button onClick={() => handleItemDelete(coffee.id)}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>

                <aside>R$ {coffee.price?.toFixed(2)}</aside>
              </Coffee>

              <span />
            </Fragment>
          ))}
        </CartItemList>
        <CartPaymentDetails>
          <CartPaymentDetailsList>
            <ul>
              <li>Total de itens</li>
              <li>Entrega</li>
              <li>Total</li>
            </ul>
            <ul>
              <li>{formatCurrency(totalItemsPrice)}</li>
              <li>{formatCurrency(deliveryFee)}</li>
              <li>
                {totalItemsPrice > 0 ? (
                  formatCurrency(totalItemsPrice + deliveryFee)
                ) : (
                  <p>0,00</p>
                )}
              </li>
            </ul>
          </CartPaymentDetailsList>
          <CartCheckoutButton type="submit" form="order">
            Confirmar Pedido
          </CartCheckoutButton>
        </CartPaymentDetails>
      </CartItemsContainer>
    </CartContainer>
  )
}
