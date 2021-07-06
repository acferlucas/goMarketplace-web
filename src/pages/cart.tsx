import { FiShoppingCart } from "react-icons/fi";
import { CartCard } from "../components/CartCard";
import { Header } from "../components/Header";
import { useCart } from "../hooks/useCart";
import { Container, CartInfo } from "../styles/pages/Cart";

export default function Cart() {
  const { totalProducts, products, totalPrice } = useCart()

  return (
    <Container>
      <Header isOnCart={true} />

      <main>
        {products.map(product => <CartCard product={product} />)}
      </main>

      <CartInfo>
        <div>
          <FiShoppingCart size={32} color="#fff" />
          <p>{totalProducts} itens</p>
        </div>

        <h1>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(totalPrice)}</h1>

        <p>Finalizar Compra</p>
      </CartInfo>
    </Container>
  )
}