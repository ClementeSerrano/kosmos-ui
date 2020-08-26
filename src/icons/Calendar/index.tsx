import React from "react";

import { IVectorProps } from "../../types";

function CalendarIcon({
  height = "20px",
  color = "currentColor",
  style,
}: IVectorProps) {
  return (
    <svg height={height} viewBox="0 0 512 512" fill={color} style={style}>
      <path
        d="M469.333,304.232V85.333c0-23.531-19.146-42.667-42.667-42.667h-53.333c-5.896,0-10.667,4.771-10.667,10.667v53.333
			c0,11.76-9.563,21.333-21.333,21.333C329.563,128,320,118.427,320,106.667c0-8.917,5.729-16.948,14.25-19.979
			c4.25-1.521,7.083-5.542,7.083-10.052V10.667C341.333,4.771,336.563,0,330.667,0C324.771,0,320,4.771,320,10.667v32H160
			c-5.896,0-10.667,4.771-10.667,10.667v53.333c0,11.76-9.563,21.333-21.333,21.333s-21.333-9.573-21.333-21.333
			c0-8.917,5.729-16.948,14.25-19.979c4.25-1.521,7.083-5.542,7.083-10.052V10.667C128,4.771,123.229,0,117.333,0
			c-5.896,0-10.667,4.771-10.667,10.667v32h-64C19.146,42.667,0,61.802,0,85.333v341.333c0,23.531,19.146,42.667,42.667,42.667
			H304.23C325.772,495.376,358.316,512,394.667,512C459.354,512,512,459.365,512,394.667
			C512,358.313,495.374,325.77,469.333,304.232z M277.333,394.667c0,11.104,1.654,21.811,4.549,32H42.667v-256h384v111.216
			c-10.189-2.897-20.896-4.549-32-4.549C329.979,277.333,277.333,329.969,277.333,394.667z M437.333,405.333h-32v32
			c0,5.896-4.771,10.667-10.667,10.667S384,443.229,384,437.333v-32h-5.771H352c-5.896,0-10.667-4.771-10.667-10.667
			S346.104,384,352,384h32v-32c0-5.896,4.771-10.667,10.667-10.667s10.667,4.771,10.667,10.667v26.229V384h32
			c5.896,0,10.667,4.771,10.667,10.667S443.229,405.333,437.333,405.333z"
      />
    </svg>
  );
}

export default CalendarIcon;
