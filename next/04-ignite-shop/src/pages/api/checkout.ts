// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from '@/lib/stripe'
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
//   error: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { priceIds } = req.body
  const checkoutData = JSON.parse(req.body.checkoutData)

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!checkoutData) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: checkoutData,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
