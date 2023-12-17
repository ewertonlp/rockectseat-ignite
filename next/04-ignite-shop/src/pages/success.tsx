import { stripe } from '@/lib/stripe'
import { ImageContainer, SuccesContainer } from '@/styles/pages/success'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

interface SuccesProps {
  customerName: string
  products: {
    name: string
    imageUrl: string
    quantity: number
  }[]
}

export default function Success({ customerName, products }: SuccesProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccesContainer>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {products.map((product, index) => (
            <>
              <ImageContainer style={{ marginLeft: index > 0 ? '-12%' : '0' }}>
                <Image
                  key={product.name}
                  src={product.imageUrl}
                  width={135}
                  height={135}
                  alt=""
                />
              </ImageContainer>
            </>
          ))}
        </div>
        <div>
          <h1>Compra Efetuada!</h1>
          <p>
            Uhuul <strong>{customerName}</strong>, sua compra de{' '}
            <strong>{products.length} camisetas</strong> já está a caminho da sua casa.{' '}
          </p>
        </div>
        <p></p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccesContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const products = session.line_items?.data.map((item) => ({
    name: item.price?.product.name,
    imageUrl: item.price?.product.images[0],
    quantity: item.quantity,
  }))

  return {
    props: {
      customerName,
      products,
    },
  }
}
