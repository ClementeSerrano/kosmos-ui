import React from "react";

import { TVectorProps } from "../../types/vectors";

function RocketIcon({
  height = "24px",
  colors,
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 100 100" style={style}>
      <path
        fill={colors?.default || color}
        d="M94.33,3.1H90.51A56.21,56.21,0,0,0,42.35,30.59c-.55.94-1.06,1.85-1.53,2.77L22.32,32A3,3,0,0,0,20,32.9L3.54,49.34a3,3,0,0,0,2,5.12l21.8.7,1,1A24.26,24.26,0,0,0,15.09,77.77v2.08a3,3,0,0,0,3,3h2.08A24.36,24.36,0,0,0,41.8,69.59l2.68,2.68L45.11,94a3,3,0,0,0,5.12,2L66.59,79.65a3,3,0,0,0,.87-2.33L66.28,60c1.46-.73,2.92-1.53,4.34-2.4A55.56,55.56,0,0,0,97.33,9.93V6.1A3,3,0,0,0,94.33,3.1ZM21.11,76.83A18.26,18.26,0,0,1,32.89,60.68l4.37,4.37A18.34,18.34,0,0,1,21.11,76.83ZM91.33,9.93A49.6,49.6,0,0,1,67.49,52.49a50.12,50.12,0,0,1-5.57,2.95,3,3,0,0,0-1.76,2.94l1.23,18L50.9,86.86l-.46-16a3,3,0,0,0-.88-2L30.77,50.08a3,3,0,0,0-2-.88l-16.06-.51L23.26,38.11l19.15,1.38a3,3,0,0,0,2.93-1.72C46,36.4,46.69,35,47.52,33.64a50.19,50.19,0,0,1,43-24.54h.82Z"
      />
      <path
        fill={colors?.default || color}
        d="M68,22a10.33,10.33,0,1,0,7.31,17.64h0A10.33,10.33,0,0,0,68,22Zm3.06,13.4a4.33,4.33,0,1,1,1.27-3.06A4.34,4.34,0,0,1,71.1,35.43Z"
      />
    </svg>
  );
}

export default RocketIcon;
