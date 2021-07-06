import React, { createContext, useState, ReactNode, useMemo } from "react";
import { useContext } from "react";

interface Product {
  id: string
  title: string
  price: number
  image_url: string
  amount: number
}

interface CartContextData {
  products: Product[]
  totalProducts: number
  totalPrice: number
  addProduct: (product: Omit<Product, 'amount'>) => void
  removeProduct: (id: string) => void
}

interface CartProviderProps {
  children: ReactNode 
}

const CartContext = createContext<CartContextData>({} as CartContextData)

function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  const totalProducts = useMemo(() => {
    const total = products.reduce((value, product) => value + product.amount, 0)

    return total
  }, [products])

  const totalPrice = useMemo(() => {
    const total = products.reduce((price, product) => price + product.price * product.amount, 0)

    return total
  }, [products])

  function addProduct(produto: Omit<Product, 'amount'>){
    const productExists = products.find(product => product.id === produto.id)

    if (productExists) {
      const updatedProducts = products.map(
        product => product.id === produto.id ? 
        { ...product, amount: product.amount + 1 } : 
        product
      )

      setProducts(updatedProducts)

      return
    }

    setProducts(state => [...state, {...produto, amount: 1}])
  }

  function removeProduct(id: string) {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        if (product.amount > 1)
          return { ...product, amount: product.amount - 1 }
        else
          return { ...product, amount: 0 }
      } else 
        return product
    })

    const filteredProducts = updatedProducts.filter(product => product.amount > 0)

    setProducts(filteredProducts)
  }

  return (
    <CartContext.Provider 
      value={{
        products, 
        addProduct, 
        removeProduct, 
        totalProducts, 
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  return useContext(CartContext)
}

export { useCart, CartProvider }
