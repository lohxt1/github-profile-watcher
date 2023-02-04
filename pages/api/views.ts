// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import redis from "@/lib/redis";
// import type { NextApiRequest, NextApiResponse } from "next";

// let counter = 7;

// const getBadge = ({ count }: { count: number }) => {
//   const countStr = count.toString();

//   console.log(countStr.length * 20);

//   return `<?xml version="1.0" encoding="UTF-8"?>
// <svg width="189px" height="30px" viewBox="0 0 189 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//     <linearGradient id="b" x2="0" y2="100%">
//     <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
//     <stop offset="1" stop-opacity=".1" />
//   </linearGradient>
//   <mask id="a">
//     <rect width="${106 + countStr.length * 5}" height="20" rx="3" fill="#fff" />
//   </mask>
//   <g mask="url(#a)">
//     <rect width="81" height="20" fill="#555" />
//     <rect x="81" width="${
//       20 + countStr.length * 6
//     }" height="20" fill="#007ec6" />
//     <rect width="106" height="20" fill="url(#b)" />
//   </g>
//   <g
//     fill="#fff"
//     text-anchor="middle"
//     font-family="DejaVu Sans,Verdana,Geneva,sans-serif"
//     font-size="11"
//   >
//     <text x="41.5" y="15" fill="#010101" fill-opacity=".3">
//       Profile views
//     </text>
//     <text x="41.5" y="14">
//       Profile views
//     </text>
//     <text x="${
//       92.5 + (countStr.length - 1) * 2.75
//     }" y="15" fill="#010101" fill-opacity=".3">
//       ${count}
//     </text>
//     <text x="${92.5 + (countStr.length - 1) * 2.75}" y="14">
//       ${count}
//     </text>
//   </g>
// </svg>
// `;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<string>
// ) {
//   counter++;
//   console.log(req.headers);
//   res.setHeader("Content-Type", "image/svg+xml");
//   res.setHeader(
//     "Cache-control",
//     "max-age=0, no-cache, no-store, must-revalidate"
//   );

//   const forwarded = req.headers["x-forwarded-for"];

//   console.log(forwarded);

//   const data = { ...req.headers, counter };

//   redis.hset("views", "lohxt1", JSON.stringify({ ...data }));

//   // Send the generated SVG as the result
//   res.send(getBadge({ count: counter }));
// }

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
