import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path = [] } = req.query;
  const url = `https://final-project-api-alpha.vercel.app/api/${Array.isArray(path) ? path.join('/') : path}`;

  const apiRes = await fetch(url, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      // Forward headers if needed
    },
    body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
  });

  const data = await apiRes.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(apiRes.status).json(data);
}