import Image from 'next/image'
import { Handbag, X } from '@phosphor-icons/react'
import {
  EmptyCart,
  ImageContainer,
  ShoppingCartContainer,
  ShoppingCartContent,
  ShoppingCartItemDetail,
  ShoppingCartItems,
  ShoppingCartTotalDetails,
} from './style'
import axios from 'axios'
import { useProduct } from '@/hooks/useProducts'
import { useState } from 'react'
import { transformNumberToCurrency } from '@/utils/transformNumberToCurrency'
import Link from 'next/link'
interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const {
    cartItems,
    hasProductOnCart,
    totalCartProducts,
    totalProductValue,
    removeCartItem,
  } = useProduct()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const checkoutSessionData = cartItems.map((item) => {
    return {
      price: item.priceId,
      quantity: item.quantity,
    }
  })

  async function handleCreatePurchase() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        checkoutData: JSON.stringify(checkoutSessionData),
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar para o checkout!')
      console.log(error)
    }
  }

  return (
    <ShoppingCartContainer style={{ right: isOpen ? '0' : '-480px' }}>
      <X
        size={24}
        onClick={onClose}
        style={{
          position: 'absolute',
          right: '1.75rem',
          top: '1.75rem',
          cursor: 'pointer',
        }}
      />
      <ShoppingCartContent>
        <h2>Sacola de Compras</h2>
        {hasProductOnCart ? (
          cartItems?.map((item) => {
            return (
              <ShoppingCartItems key={item.id}>
                <ImageContainer>
                  <Image src={item.imageUrl} width={95} height={85} alt="" />
                </ImageContainer>
                <ShoppingCartItemDetail>
                  <p>{item.name}</p>
                  <strong>{transformNumberToCurrency(item.price)}</strong>
                  <button onClick={() => removeCartItem(item.id)}>
                    Remover
                  </button>
                </ShoppingCartItemDetail>
              </ShoppingCartItems>
            )
          })
        ) : (
          <EmptyCart>
            <Handbag
              size={48}
              color={'#00875F'}
              style={{ display: 'flex', justifyContent: 'center' }}
            />
            <p>Sua sacola de compras está vazia.</p>
            <Link href="/">Voltar ao catálogo</Link>
          </EmptyCart>
        )}
      </ShoppingCartContent>

      {hasProductOnCart ? (
        <ShoppingCartTotalDetails>
          <div>
            <p>
              Quantidade{' '}
              <span>
                {totalCartProducts() > 1
                  ? `${totalCartProducts()} itens`
                  : '1 item'}{' '}
              </span>
            </p>
            <p>
              <strong>Valor Total</strong>{' '}
              <span>{transformNumberToCurrency(totalProductValue())}</span>
            </p>
          </div>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleCreatePurchase}
          >
            Finalizar Compra
          </button>
        </ShoppingCartTotalDetails>
      ) : ""}
    </ShoppingCartContainer>
  )
}
