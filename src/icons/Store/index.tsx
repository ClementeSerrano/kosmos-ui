import React from "react";

import { IVectorProps } from "../../types";

function StoreIcon({
  height = "24px",
  color = "currentColor",
  style,
}: IVectorProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 75053 75053"
      style={style}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <g>
        <path
          fill={color}
          fillRule="nonzero"
          d="M68017 37298l0 26028c0,3878 -3158,7036 -7036,7036l-28145 0 0 -23454c0,-1295 -1050,-2346 -2346,-2346l-9381 0c-1295,0 -2345,1051 -2345,2346l0 23454 -4691 0c-3873,0 -7036,-3164 -7036,-7036l8 -26035c755,154 1536,235 2336,235 3827,0 7236,-1850 9379,-4701 2142,2856 5554,4709 9385,4709 3829,0 7239,-1851 9381,-4703 2143,2852 5553,4703 9382,4703 3829,0 7240,-1851 9382,-4704 2142,2853 5553,4704 9382,4704 803,0 1588,-80 2345,-236zm-28146 -32608l14073 0 0 21118c0,3870 -3167,7036 -7037,7036 -3870,0 -7036,-3166 -7036,-7036l0 -21118zm18764 0l9382 0c2581,0 4691,2111 4691,4691l0 16427c0,3870 -3166,7036 -7036,7036 -3871,0 -7037,-3165 -7037,-7036l0 -21118zm-23453 0l-14073 0 0 21118c0,3870 3166,7036 7036,7036 3871,0 7037,-3165 7037,-7036l0 -21118zm-18764 0l-9383 0c-2580,0 -4690,2111 -4690,4691l0 16418c0,3870 3166,7036 7036,7036 3871,0 7037,-3165 7037,-7036l0 -21109zm28146 39872c-1295,0 -2346,1051 -2346,2346l0 7037c0,1295 1051,2345 2346,2345l11728 0c1295,0 2345,-1050 2345,-2345l0 -7037c0,-1295 -1050,-2346 -2345,-2346l-11728 0z"
        />
      </g>
    </svg>
  );
}

export default StoreIcon;
