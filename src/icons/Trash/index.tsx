import React from "react";

import { TVectorProps } from "../../types/vectors";

function TrashIcon({
  height = "20px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 515.556 515.556"
      fill={color}
      style={style}
    >
      <path d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z" />
      <path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z" />
    </svg>
  );
}

export default TrashIcon;
