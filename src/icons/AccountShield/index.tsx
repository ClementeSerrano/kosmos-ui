import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function ShoppingBagIcon({
  height = "24px",
  color = "currentColor",
  style,
  className,
}: TVectorProps) {
  return (
    <svg
      height={height}
      className={className}
      style={style}
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        d="M27.4375,4.9834L16.33301,1.05713c-0.21484-0.07617-0.45117-0.07617-0.66602,0L4.5625,4.9834   C4.16309,5.12451,3.89551,5.50244,3.89551,5.92627V10.146c0,8.38428,4.4375,16.31885,11.58105,20.70654   C15.63672,30.95117,15.81836,31,16,31s0.36328-0.04883,0.52344-0.14746c7.14355-4.3877,11.58105-12.32227,11.58105-20.70654   V5.92627C28.10449,5.50244,27.83691,5.12451,27.4375,4.9834z M26.10449,10.146c0,7.48682-3.85645,14.5835-10.10449,18.67041   C9.75195,24.72949,5.89551,17.63281,5.89551,10.146V6.6333L16,3.06055L26.10449,6.6333V10.146z"
      />
      <path
        fill={color}
        d="M12.68945,9.43555c0,1.82568,1.48535,3.31104,3.31055,3.31104s3.31055-1.48535,3.31055-3.31104S17.8252,6.125,16,6.125   S12.68945,7.60986,12.68945,9.43555z M17.31055,9.43555c0,0.72314-0.58789,1.31104-1.31055,1.31104   s-1.31055-0.58789-1.31055-1.31104C14.68945,8.71289,15.27734,8.125,16,8.125S17.31055,8.71289,17.31055,9.43555z"
      />
      <path
        fill={color}
        d="M10.11035,19.63867v0.5752c0,0.55273,0.44727,1,1,1h9.7793c0.55273,0,1-0.44727,1-1v-0.5752   c0-3.24805-2.6416-5.89014-5.88965-5.89014S10.11035,16.39063,10.11035,19.63867z M19.86621,19.21387h-7.73242   C12.3457,17.26758,13.99902,15.74854,16,15.74854S19.6543,17.26758,19.86621,19.21387z"
      />
    </svg>
  );
}
