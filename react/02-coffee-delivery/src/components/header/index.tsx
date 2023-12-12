import { NavLink } from 'react-router-dom'
import { CartLink, CityLink, HeaderContainer, HeaderContent } from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useShoppingCart } from '../../contexts/productsContext'

export function Header() {
  const { cart } = useShoppingCart()
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <nav>
          <CityLink>
            <NavLink to="#" title="Localidade" className="cityLinkItem">
              <MapPin size={22} weight="fill" />
              Mogi das Cruzes, SP
            </NavLink>
          </CityLink>
          <CartLink>
            <NavLink
              to="/cart"
              title="Sacola de compras"
              className="cartLinkItem"
            >
              <ShoppingCart size={22} weight="fill" />
              {cart.length > 0 && (
                <div
                  className="cartItemCount"
                  style={{
                    color: 'white',
                    width: '1.25rem',
                    height: '1.25rem',
                    position: 'absolute',
                    top: '0px',
                    right: '0',
                    transform: 'translate(25%, -25%)',
                  }}
                >
                  {cart.length}
                </div>
              )}
            </NavLink>
          </CartLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
