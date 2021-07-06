import { Container } from '../styles/pages/Home'

import { Header } from '../components/Header'
import { StoreCard } from '../components/StoreCard'
import { api } from '../services/api'
import { GetServerSideProps, GetStaticProps } from 'next'

/**
 * [x] Client side fetching
 * [x] Server side fetching
 * [x] Static fetching
 */

interface Product {
  id: string
  title: string
  image_url: string
  price: number
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  
  
  return (
    <Container>
      <Header />

      <main>
        {products.map(product => <StoreCard key={product.id} produto={product} />)}
      </main>
    </Container>
  )
}

/**
 * SSR - GetServerSideProps
 * SSG - GetStaticProps
 */

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await api.get('products')

//   return {
//     props: {
//       products: data
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('products')

  return {
    props: {
      products: data
    },
    revalidate: 60 * 5 // 2 minutos
  }
}
