import { AppProps } from "next/dist/next-server/lib/router/router"
import Global from "../styles/Global"

import { CartProvider } from '../hooks/useCart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Global />
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
