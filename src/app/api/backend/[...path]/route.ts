// pages/api/backend/[...path].ts
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path } = req.query;

  if (!path || !Array.isArray(path)) {
    return res.status(400).json({ error: "Invalid path" });
  }

  const targetBaseUrl = process.env.NEXT_PUBLIC_IP_ADDRESS;
  //"http://34.87.25.74:8080";
  const targetUrl = `${targetBaseUrl}/api/v1.0/${path.join("/")}`;

//   console.log("🔧 Proxy to:", targetUrl);
//   console.log("🔧 Headers:", req.headers);

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Accept"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const options: RequestInit = {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Forward semua headers authorization
        ...(req.headers.authorization && {
          Authorization: req.headers.authorization as string,
        }),
        // Juga forward basic auth jika ada
        ...(req.headers["authorization"] && {
          Authorization: req.headers["authorization"] as string,
        }),
      },
    };

    // Untuk login, mungkin butuh empty body atau specific body
    if (req.method !== "GET" && req.body && Object.keys(req.body).length > 0) {
      options.body = JSON.stringify(req.body);
    }

    const response = await fetch(targetUrl, options);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    console.error("❌ Proxy error:", error);
    res.status(500).json({
      error: "Proxy error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
