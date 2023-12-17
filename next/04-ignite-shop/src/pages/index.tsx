import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { HomeContainer, Icon, Product } from '@/styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '@/lib/stripe'

import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { Handbag } from '@phosphor-icons/react'

import { ProductContext } from '@/contexts/productContext'
import { useContext, useState } from 'react'
import { ProductDetails } from '@/styles/pages/product'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <Icon>
                    <Handbag size={24} weight="bold" />
                  </Icon>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

// getServerSideProps é uma boa para inserir dados sensíveis como tokens e banco dados. Get Static não tem acesso ao req ou res da requisição como info de usuário logado ou cookies aí tem que usar getServerSideProps
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    //quando é lista sempre data antes, se for somente um produto fica: stripe.products.retrieve
    expand: ['data.default_price'],
  })

  //nova lista com os dados que necessito
  const products = response.data.map((product) => {
    // pegar o valor de price
    const productPrice = product.default_price as Stripe.Price

    // const unitAmount =
    //   price && price.unit_amount !== null ? price.unit_amount / 100 : 0

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(productPrice.unit_amount! / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
