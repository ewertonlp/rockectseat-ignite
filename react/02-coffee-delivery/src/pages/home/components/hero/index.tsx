import imagemHero from '../../../../assets/imagemHero.png'
import {
  BgCoffee,
  BgPackage,
  BgShoppingCart,
  BgTimer,
  HeroContainer,
  HeroContent,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul>
            <li>
              <BgShoppingCart>
                <ShoppingCart size={22} weight="fill" />
              </BgShoppingCart>
              Compra simples e segura
            </li>

            <li>
              <BgPackage>
                <Package size={22} weight="fill" />
              </BgPackage>
              Embalagem mantém o café intacto
            </li>
            <li>
              <BgTimer>
                <Timer size={22} weight="fill" />
              </BgTimer>
              Entrega rápida e rastreada
            </li>
            <li>
              <BgCoffee>
                <Coffee size={22} weight="fill" />
              </BgCoffee>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <div>
          <img src={imagemHero} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  )
}

;<Hero></Hero>
