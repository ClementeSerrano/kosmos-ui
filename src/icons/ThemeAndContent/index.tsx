import React from "react";

import { IconProps } from "../types";

function ThemeAndContentIcon({
  height = "20px",
  color = "currentColor",
  style,
}: IconProps) {
  return (
    <svg height={height} style={style} viewBox="0 0 518.4 518.4">
      <path
        fill={color}
        d="M372.266 337.067c4.267 0 6.4-2.133 6.4-6.4l19.2-40.533-55.467-27.733-17.066 40.533c-2.133 2.133-2.133 6.4 0 8.533l6.4 6.4c10.667 4.267 19.2 8.533 27.733 17.066 2.133 2.133 4.267 2.133 6.4 2.133 4.267 2.135 4.267 2.135 6.4.001z"
      />
      <path
        fill={color}
        d="M421.333 311.467c-4.267-2.133-10.667 2.133-12.8 6.4l-23.467 51.2c0 2.133-2.133 4.267 0 6.4 6.4 32-10.667 66.133-27.733 85.333-17.066 17.066-46.934 27.733-78.934 27.733-29.867 0-55.467-10.667-72.533-27.733-2.133-2.133-8.533-8.533-10.667-17.066-2.133 2.133-4.267 6.4-8.533 6.4H80c-6.4 0-10.667-4.267-10.667-10.667V290.133c0-6.4 4.267-10.667 10.667-10.667h106.667c6.4 0 10.667 4.267 10.667 10.667v136.533c4.267-8.533 10.667-14.934 19.2-17.066 2.133 0 2.133 0 4.267-2.133 2.133-2.133 6.4-4.267 10.667-8.533 2.133-2.133 2.133-4.267 2.133-6.4s0-2.133 2.133-4.267c2.133-4.267 2.133-8.533 4.267-14.934V371.2v-78.933c0-6.4 4.267-10.667 10.667-10.667H316.8l8.533-21.333H77.867c-6.4 0-10.667-4.267-10.667-10.667v-85.333c0-6.4 4.267-10.667 10.667-10.667h285.867c2.133 0 4.267 0 4.267 2.133l21.333-49.066c2.133-2.133 0-6.4 0-10.667-2.133-2.133-4.267-4.267-8.533-4.267H56.534C26.667 91.733 3.2 115.2 3.2 145.066v320c0 29.867 23.467 53.333 53.333 53.333h320c29.867 0 53.333-23.467 53.333-53.333V328.533c0-10.666-4.267-14.933-8.533-17.066z"
      />
      <path
        fill={color}
        d="M272 354.133c-12.8 12.8-17.066 25.6-19.2 36.267-2.133 8.533-4.267 14.934-10.667 21.333-12.8 12.8-19.2 14.934-19.2 14.934-4.267 2.133-6.4 4.267-6.4 8.533 0 4.267 0 6.4 2.133 10.667 14.934 14.934 34.133 21.333 57.6 21.333 25.6 0 51.2-8.533 64-21.333 21.333-21.333 34.133-66.133 10.667-89.6C329.599 332.8 295.466 332.8 272 354.133zM478.933 0C463.999 0 451.2 8.533 444.8 21.333L350.933 243.2l55.467 27.733L510.933 51.2c2.133-4.267 4.267-10.667 4.267-17.066C515.2 14.934 498.133 0 478.933 0z"
      />
    </svg>
  );
}

export default ThemeAndContentIcon;