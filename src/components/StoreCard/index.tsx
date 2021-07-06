import { FiPlus } from 'react-icons/fi'
import { Container } from './styles'
import { useCart } from '../../hooks/useCart'

interface Product {
  id: string
  title: string
  price: number
  image_url: string
}

type StoreCardProps = {
  produto : Product
}
export function StoreCard({produto} : StoreCardProps) {
  
  const { addProduct } = useCart()
  return (

    <Container>
      <img src={produto.image_url} alt="Cadeira" />
      <p>{produto.title}</p>
      <div>
        <strong>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(produto.price)}</strong>
        <button onClick={() => addProduct(produto)}>Adicionar <FiPlus size={16} color="#fff" /> </button>
      </div>
    </Container>
  )
}