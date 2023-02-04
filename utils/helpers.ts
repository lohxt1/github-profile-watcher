type CountType = string | number;

const compactForm = (number: number) => {
  return new Intl.NumberFormat("en-GB", {
    notation: "compact",
  }).format(number);
};

const getBadge = ({ count, color }: { count: CountType; color?: string }) => {
  const countStr = count.toString();
  return `<?xml version="1.0" encoding="UTF-8"?>
    <svg 
      width="${100 + countStr.length * 6}px"
      height="20px"
      viewBox="0 0 ${100 + countStr.length * 6} 20"
      version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="border-radius:2px;"
    >
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1" />
        <stop offset="1" stop-opacity=".1" />
      </linearGradient>
      <g mask="url(#a)">
        <rect width="81" height="20" fill="#555" />
        <rect
          x="81"
          width="${20 + countStr.length * 6}"
          height="20"
          fill="${color || "#6082B6"}"
        />
        <rect width="${
          81 + 20 + countStr.length * 6
        }" height="20" fill="url(#b)" />
      </g>
      <g
        fill="#fff"
        text-anchor="middle"
        font-family="DejaVu Sans,Verdana,Geneva,sans-serif"
        font-size="11"
      >
        <text x="41.5" y="15" fill="#111" fill-opacity=".25">
          Profile views
        </text>
        <text x="41.5" y="14">
          Profile views
        </text>
        <text 
          x="${92.5 + (countStr.length - 1) * 2.75}"
          y="15"
          fill="#111"
          fill-opacity=".25"
        >
          ${count}
        </text>
        <text
          x="${92.5 + (countStr.length - 1) * 2.75}"
          y="14"
        >
          ${count}
        </text>
      </g>
  </svg>
  `;
};

export { compactForm, getBadge };
