import React from "react";

import { IVectorProps } from "../../types/vectors";

function PenIcon({
  height = "45px",
  color = "currentColor",
  style,
}: IVectorProps) {
  return (
    <svg height={height} viewBox="0 0 512 512" fill={color} style={style}>
      <path d="m1.03125 492.398438c-1.5 5.203124 0 10.902343 3.796875 14.703124 2.800781 2.796876 6.703125 4.398438 10.601563 4.398438 1.398437 0 2.800781-.199219 4.101562-.601562l139.796875-39.898438-118.398437-118.398438zm0 0" />
      <path d="m15.429688 512c-4.101563 0-8-1.601562-10.898438-4.5-4-4-5.5-9.800781-3.902344-15.199219l40.199219-140.601562 119.601563 119.601562-140.800782 40.097657c-1.398437.402343-2.800781.601562-4.199218.601562zm25.800781-158.5-39.699219 139c-1.402344 5.101562 0 10.5 3.699219 14.199219 2.699219 2.699219 6.398437 4.199219 10.199219 4.199219 1.300781 0 2.699218-.199219 4-.597657l139-39.699219zm0 0" />
      <path d="m498.328125 77.199219-63.5-63.5c-8.597656-8.5-19.796875-13.199219-31.898437-13.199219-12 0-23.300782 4.699219-31.800782 13.101562l-31.800781 31.796876 127.101563 127.101562 31.800781-31.800781c8.5-8.5 13.097656-19.800781 13.097656-31.800781.101563-12-4.597656-23.199219-13-31.699219zm0 0" />
      <path d="m466.53125 173.199219-127.800781-127.800781 32.097656-32.097657c8.601563-8.601562 20-13.300781 32.101563-13.300781 12.199218 0 23.601562 4.699219 32.101562 13.300781l63.5 63.5c8.597656 8.597657 13.296875 20 13.296875 32.097657 0 12.203124-4.699219 23.601562-13.296875 32.101562zm-126.402344-127.800781 126.402344 126.402343 31.398438-31.402343c8.398437-8.398438 13-19.5 13-31.398438s-4.601563-23-13-31.398438l-63.5-63.601562c-8.398438-8.398438-19.601563-13-31.5-13-11.898438 0-23 4.601562-31.398438 13zm0 0" />
      <path d="m57.804688 327.015625 260.421874-260.425781 127.136719 127.136718-260.421875 260.425782zm0 0" />
      <path d="m184.929688 454.898438-127.898438-127.898438 261.199219-261.101562 127.800781 127.800781zm-126.398438-127.898438 126.398438 126.398438 259.699218-259.699219-126.398437-126.398438zm0 0" />
    </svg>
  );
}

export default PenIcon;
