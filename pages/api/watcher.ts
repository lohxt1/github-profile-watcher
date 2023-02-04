// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from "@/lib/redis";
import { compactForm, getBadge } from "@/utils/helpers";
import type { NextApiRequest, NextApiResponse } from "next";

type CountType = string | number;

interface MoreNextApiRequest extends NextApiRequest {
  query: {
    username: string;
    color?: string;
    compact?: string;
  };
}

const GITHUB_USERNAME = "lohxt1";

export default async function handler(
  req: MoreNextApiRequest,
  res: NextApiResponse<string>
) {
  const { username = GITHUB_USERNAME, color, compact } = req.query;

  // Get the current view count
  let _count = await redis.hget("views", username);
  let count: CountType = parseInt(JSON.parse(_count as string) || 0);

  // Increement the count, only if the request is from the github profile page.
  // NOTE: To test on local, comment out the `if` condition
  const userAgent = req.headers["user-agent"];
  if (userAgent?.includes("github")) {
    // Increement the view count
    count++;

    // Update Redis store
    await redis.hset("views", username, JSON.stringify(count));
  }

  // Convert view count to compact form based on query param ( 1000 -> 1K )
  if (compact) {
    count = compactForm(count);
  }

  // returns a svg string
  const badge = getBadge({ count, color });

  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader(
    "Cache-control",
    "max-age=0, no-cache, no-store, must-revalidate"
  );
  res.send(badge);
}
