import Link from 'next/link'
import { FiChevronLeft, FiShoppingCart } from 'react-icons/fi'
import { useCart } from '../../hooks/useCart'

import { Container, CartInfo } from './styles'

interface HeaderProps {
  isOnCart?: boolean
}

export function Header({ isOnCart = false }: HeaderProps) {
  
  const { totalProducts, totalPrice } = useCart()
  
  return (
    <Container>
      { isOnCart && (
        <Link href="/">
          <a>
            <FiChevronLeft color="#E83F5B" size={32} />
          </a>
        </Link>
      )}

      <img src="logo.svg" alt="GoMarketplace" />

      { !isOnCart && (
        <CartInfo>
          <Link href="cart">
            <a>
              <div>
                <FiShoppingCart size={24} color="#E83F5B" />
                <h1>Ver carrinho ({totalProducts})</h1>
              </div>
            </a>
          </Link>

          <strong>Total: {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</strong>
        </CartInfo>
      )}
    </Container>
  )
}