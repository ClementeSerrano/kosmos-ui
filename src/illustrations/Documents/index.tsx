import React from "react";

import { IVectorProps } from "../../types";

function DocumentsIllustration({
  height = "102px",
  style,
  className,
}: IVectorProps): JSX.Element {
  return (
    <svg
      height={height}
      viewBox="0 0 167 102"
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
        <g id="Documents" transform="translate(-47.000000, -50.000000)">
          <g id="Group" transform="translate(47.000000, 50.000000)">
            <path
              d="M129,85 L46,85 C42.1340068,85 39,81.8659932 39,78 C39,74.1340068 42.1340068,71 46,71 L7,71 C3.13400675,71 0,67.8659932 0,64 C0,60.1340068 3.13400675,57 7,57 L47,57 C50.8659932,57 54,53.8659932 54,50 C54,46.1340068 50.8659932,43 47,43 L22,43 C18.1340068,43 15,39.8659932 15,36 C15,32.1340068 18.1340068,29 22,29 L62,29 C58.1340068,29 55,25.8659932 55,22 C55,18.1340068 58.1340068,15 62,15 L160,15 C163.865993,15 167,18.1340068 167,22 C167,25.8659932 163.865993,29 160,29 L120,29 C123.865993,29 127,32.1340068 127,36 C127,39.8659932 123.865993,43 120,43 L142,43 C145.865993,43 149,46.1340068 149,50 C149,53.8659932 145.865993,57 142,57 L131.826087,57 C126.951574,57 123,60.1340068 123,64 C123,66.5773288 125,68.9106622 129,71 C132.865993,71 136,74.1340068 136,78 C136,81.8659932 132.865993,85 129,85 Z M160,57 C156.134007,57 153,53.8659932 153,50 C153,46.1340068 156.134007,43 160,43 C163.865993,43 167,46.1340068 167,50 C167,53.8659932 163.865993,57 160,57 Z"
              id="Background"
              fill="hsl(209, 75%, 95%)"
            />
            <path
              d="M111.708558,17.671844 L112.673157,86.1424997 L112.673157,92.9999216 C112.673157,95.2090606 110.882296,96.9999216 108.673157,96.9999216 L49.6731572,96.9999216 C47.4640182,96.9999216 45.6731572,95.2090606 45.6731572,92.9999216 L45.6731572,19.0209641 C45.6731572,17.9163946 46.5685877,17.0209641 47.6731572,17.0209641 C47.6801346,17.0209641 47.687112,17.0210006 47.694089,17.0210736 L52.5826591,17.0722397 M56.535613,17.1136132 L61.1511792,17.161922"
              id="Shape"
              stroke="hsl(209, 100%, 50%)"
              strokeWidth="2.5"
              fill="#FFFFFF"
              strokeLinecap="round"
              transform="translate(79.173157, 57.010443) rotate(-7.000000) translate(-79.173157, -57.010443) "
            />
            <path
              d="M108.700739,21.5543308 L109.564559,83.6058625 L109.564559,89.8204011 C109.564559,91.8224333 107.960803,93.4454011 105.98247,93.4454011 L53.1466487,93.4454011 C51.1683153,93.4454011 49.5645591,91.8224333 49.5645591,89.8204011 L49.5645591,22.9454011 C49.5645591,21.8408316 50.4599896,20.9454011 51.5645591,20.9454011 L58.1008814,20.9454011"
              id="Rectangle"
              fill="#E8F0FE"
              transform="translate(79.564559, 57.195401) rotate(-7.000000) translate(-79.564559, -57.195401) "
            />
            <path
              d="M63.671875,1.25 C62.1530919,1.25 60.921875,2.48121694 60.921875,4 L60.921875,80 C60.921875,81.5187831 62.1530919,82.75 63.671875,82.75 L122.671875,82.75 C124.190658,82.75 125.421875,81.5187831 125.421875,80 L125.421875,17.434923 C125.421875,16.7052828 125.13191,16.0055517 124.615817,15.4897778 L111.172578,2.05485483 C110.656902,1.53949778 109.957687,1.25 109.228636,1.25 L63.671875,1.25 Z"
              id="Rectangle"
              stroke="hsl(209, 100%, 50%)"
              strokeWidth="2.5"
              fill="#FFFFFF"
            />
            <path
              d="M109.671875,2.40283203 L109.671875,14 C109.671875,15.6568542 111.015021,17 112.671875,17 L120.605469,17"
              id="Shape"
              stroke="hsl(209, 100%, 50%)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M71.671875,17 L97.671875,17 L71.671875,17 Z M71.671875,29 L114.671875,29 L71.671875,29 Z M71.671875,42 L114.671875,42 L71.671875,42 Z M71.671875,55 L114.671875,55 L71.671875,55 Z M71.671875,68 L97.671875,68 L71.671875,68 Z"
              id="lines"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default DocumentsIllustration;
