import React from "react";

import { IVectorProps } from "../../types";

function NoTasksIllustration({
  height = "110px",
  style,
  className,
}: IVectorProps): JSX.Element {
  return (
    <svg
      height={height}
      viewBox="0 0 167 110"
      style={style}
      className={className}
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="NoTasks" transform="translate(-35.000000, -33.000000)">
          <g id="Group" transform="translate(35.000000, 35.000000)">
            <path
              d="M129,98 L46,98 C42.1340068,98 39,94.8659932 39,91 C39,87.1340068 42.1340068,84 46,84 L7,84 C3.13400675,84 0,80.8659932 0,77 C0,73.1340068 3.13400675,70 7,70 L47,70 C50.8659932,70 54,66.8659932 54,63 C54,59.1340068 50.8659932,56 47,56 L22,56 C18.1340068,56 15,52.8659932 15,49 C15,45.1340068 18.1340068,42 22,42 L62,42 C58.1340068,42 55,38.8659932 55,35 C55,31.1340068 58.1340068,28 62,28 L160,28 C163.865993,28 167,31.1340068 167,35 C167,38.8659932 163.865993,42 160,42 L120,42 C123.865993,42 127,45.1340068 127,49 C127,52.8659932 123.865993,56 120,56 L142,56 C145.865993,56 149,59.1340068 149,63 C149,66.8659932 145.865993,70 142,70 L131.826087,70 C126.951574,70 123,73.1340068 123,77 C123,79.5773288 125,81.9106622 129,84 C132.865993,84 136,87.1340068 136,91 C136,94.8659932 132.865993,98 129,98 Z M160,70 C156.134007,70 153,66.8659932 153,63 C153,59.1340068 156.134007,56 160,56 C163.865993,56 167,59.1340068 167,63 C167,66.8659932 163.865993,70 160,70 Z"
              id="Background"
              fill="hsl(209, 75%, 95%)"
            />
            <path
              d="M65.9565792,87.7420769 L67.25,87.6971207 L67.25,106 C67.25,106.414214 67.5857864,106.75 68,106.75 L113,106.75 C113.414214,106.75 113.75,106.414214 113.75,106 L113.75,45 C113.75,43.4812169 112.518783,42.25 111,42.25 L70,42.25 C68.4812169,42.25 67.25,43.4812169 67.25,45 L67.25,56.3028793 L65.9565792,56.2579231 C65.8047168,56.2526448 65.6525126,56.25 65.5,56.25 C57.6570309,56.25 51.25,63.2770662 51.25,72 C51.25,80.7229338 57.6570309,87.75 65.5,87.75 C65.6525126,87.75 65.8047168,87.7473552 65.9565792,87.7420769 Z M66.0999651,81.7260065 C65.9008666,81.7419799 65.700789,81.75 65.5,81.75 C60.7660273,81.75 57.0166667,77.3440693 57.0166667,72 C57.0166667,66.6559307 60.7660273,62.25 65.5,62.25 C65.700789,62.25 65.9008666,62.2580201 66.0999651,62.2739935 L67.25,62.3662597 L67.25,81.6337403 L66.0999651,81.7260065 Z"
              id="Shape"
              stroke="#75A4FE"
              strokeWidth="2.5"
              fill="#FFFFFF"
            />
            <path
              d="M106,74.1816406 L106,78.9248047 L106,74.1816406 Z M106,50.1816406 L106,68.5 L106,50.1816406 Z"
              id="line"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.1279297,100.5 L39,100.5 L32.1279297,100.5 Z M146.12793,100.5 L149,100.5 L146.12793,100.5 Z M119,100.5 L141.427734,100.5 L119,100.5 Z M45,100.5 L66.4541016,100.5 L45,100.5 Z"
              id="ground_line"
              stroke="#75A4FE"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M93,1.52895478e-14 C90.3333333,4.21354167 89,7.88020833 89,11 C89,16.5561523 93.6538086,19.0444336 93.6538086,25.0629883 C93.6538086,28.1176758 92.1025391,31.1507161 89,34.1621094"
              id="line"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M81,11 C80.1274414,16.5126953 84,17.5322148 84,22.4745806 C84,24.9830537 83,27.4915269 81,30"
              id="line"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M99.795166,8.47412109 C98.4741211,11.8933105 99.2162854,13.9774011 99.795166,15.2041016 C101.032522,17.8261719 103,20.0895996 103,22.7578125 C103,25.8567708 101.931722,28.8391927 99.795166,31.7050781"
              id="line"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default NoTasksIllustration;
