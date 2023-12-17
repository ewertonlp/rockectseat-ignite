import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { NavHeader, NavIcon } from './style'
import logoIgnite from '../../assets/Logo.svg'
import { Handbag } from '@phosphor-icons/react'
import { ProductContext } from '@/contexts/productContext'

interface HeaderProps {
  onCartButtonClick: () => void
}



export default function Nav({ onCartButtonClick }: HeaderProps) {
  const { cartItems } = useContext(ProductContext)
  return (
    <NavHeader>
      <Link href="/">
        <Image src={logoIgnite} width={130} height={52} alt="" />
      </Link>
      <NavIcon onClick={onCartButtonClick}>
        <Handbag size={24} />
        {cartItems.length > 0 ? <div>{cartItems.length}</div> : null}
      </NavIcon>
    </NavHeader>
  )
}
