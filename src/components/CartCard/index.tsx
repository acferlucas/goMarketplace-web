import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";

interface Product {
  id: string
  title: string
  price: number
  image_url: string
  amount: number
}

interface CartCardProps {
  product: Product
}

const formater = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })

export function CartCard({ product }: CartCardProps) {
  const { addProduct, removeProduct } = useCart()

  return (
    <Container>
      <img src={product.image_url} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <span>{formater.format(product.price)}</span>
        <p>{`${product.amount}x ${formater.format(product.price * product.amount)}`}</p>
      </div>
      <div className="buttons-container">
        <button onClick={() => addProduct(product)}>
          <FiPlus size={24} color="#E83F5B"/>
        </button>
        <button onClick={() => removeProduct(product.id)}>
          <FiMinus size={24} color="#E83F5B"/>
        </button>
      </div>
    </Container>
  )
}