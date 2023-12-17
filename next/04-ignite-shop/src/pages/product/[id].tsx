import { ChangeEvent, useContext, useState } from 'react'
import Image from 'next/image'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
  selectQuantity,
} from '@/styles/pages/product'
import Head from 'next/head'
import { ProductContext, ProductData } from '@/contexts/productContext'
import { transformNumberToCurrency } from '@/utils/transformNumberToCurrency'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    description: string
    price: number
    priceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { AddCartProduct } = useContext(ProductContext)
  const [itemQuantity, setItemQuantity] = useState(1)

  const productDetails: ProductData = {
    id: product.id,
    name: product.name,
    imageUrl: product.imageUrl,
    description: product.description,
    quantity: itemQuantity,
    price: product.price,
    priceId: product.priceId,
  }

  function selectProductQuantity(event: ChangeEvent<HTMLSelectElement>) {
    setItemQuantity(Number(event.target.value))
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{transformNumberToCurrency(product.price)}</span>
          <p>{product.description}</p>
          <div>
            <strong>Quantidade</strong>
            <select
              name="selectQuantity"
              id="selectQauntity"
              value={itemQuantity}
              onChange={selectProductQuantity}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <button onClick={() => AddCartProduct(productDetails)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_OjJGXTt1EdgUqM' } },
      { params: { id: 'prod_OjJGPruo8TGoh7' } },
      { params: { id: 'prod_OjJF6NxPDI2xsl' } },
      { params: { id: 'prod_OjJEdzw5pRjQZQ' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const productId = params?.id

  const product = await stripe.products.retrieve(productId!, {
    expand: ['default_price'],
  })

  const productPrice = product.default_price as Stripe.Price

  // const unitAmount =
  //   price && price.unit_amount !== null ? price.unit_amount / 100 : 0

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: productPrice.unit_amount,
        description: product.description,
        priceId: productPrice.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
