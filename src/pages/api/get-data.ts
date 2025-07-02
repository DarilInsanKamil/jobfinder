// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  response: NextApiResponse<Data>
) {
  try {
    const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`)
    if (!apiResponse.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await apiResponse.json()
    response.status(200).json(data)
  } catch (e) {
    // Handle errors here
    response.status(500).end(`An error occurred: ${e}`)
  }
}

