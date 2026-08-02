import type { VercelRequest, VercelResponse } from "@vercel/node";
import server from "../dist/server/server.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Reconstruct Web Standard Request from Vercel/Node request
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const url = `${protocol}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach((v) => headers.append(key, v));
      } else {
        headers.set(key, value);
      }
    }
  }

  const method = req.method || "GET";
  const body = method !== "GET" && method !== "HEAD" ? JSON.stringify(req.body) : undefined;

  const request = new Request(url, {
    method,
    headers,
    body,
  });

  const response = await server.fetch(request, {}, {});

  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const responseText = await response.text();
  res.send(responseText);
}
