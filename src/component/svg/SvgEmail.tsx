import * as React from "react";

export function SvgEmail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={31}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36.484 0H3.516A3.522 3.522 0 000 3.516v23.437a3.521 3.521 0 003.516 3.516h32.968A3.521 3.521 0 0040 26.953V3.516A3.521 3.521 0 0036.484 0zM36 2.344L20.074 18.268 4.012 2.344H36zM2.344 26.468V3.99L13.63 15.18 2.344 26.468zM4 28.125l11.294-11.294 3.958 3.923a1.172 1.172 0 001.654-.004l3.859-3.858 11.233 11.233H4.001zm33.655-1.657L26.423 15.234 37.656 4.001v22.467z"
        fill="#EDBA6E"
      />
    </svg>
  );
}
