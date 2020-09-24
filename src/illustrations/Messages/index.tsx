import React from "react";

import { IVectorProps } from "../../types";

function MessagesIllustration({
  height = "102px",
  style,
  className,
}: IVectorProps): JSX.Element {
  return (
    <svg
      height={height}
      viewBox="0 0 216 102"
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
        <g id="Messages" transform="translate(-17.000000, -47.000000)">
          <g id="Group" transform="translate(17.000000, 49.000000)">
            <path
              d="M137,85 L46,85 C42.1340068,85 39,81.8659932 39,78 C39,74.1340068 42.1340068,71 46,71 L7,71 C3.13400675,71 4.73447626e-16,67.8659932 0,64 C-4.73447626e-16,60.1340068 3.13400675,57 7,57 L47,57 C50.8659932,57 54,53.8659932 54,50 C54,46.1340068 50.8659932,43 47,43 L22,43 C18.1340068,43 15,39.8659932 15,36 C15,32.1340068 18.1340068,29 22,29 L62,29 C58.1340068,29 55,25.8659932 55,22 C55,18.1340068 58.1340068,15 62,15 L119,15 C122.865993,15 126,18.1340068 126,22 C126,25.8659932 122.865993,29 119,29 L183,29 C186.865993,29 190,32.1340068 190,36 C190,39.8659932 186.865993,43 183,43 L205,43 C208.865993,43 212,46.1340068 212,50 C212,53.8659932 208.865993,57 205,57 L186,57 C182.134007,57 179,60.1340068 179,64 C179,67.8659932 182.134007,71 186,71 L192,71 C195.865993,71 199,74.1340068 199,78 C199,81.8659932 195.865993,85 192,85 L140,85 C139.485125,85 138.983234,84.944412 138.5,84.8389102 C138.016766,84.944412 137.514875,85 137,85 Z M209,85 C205.134007,85 202,81.8659932 202,78 C202,74.1340068 205.134007,71 209,71 C212.865993,71 216,74.1340068 216,78 C216,81.8659932 212.865993,85 209,85 Z"
              id="Background"
              fill="hsl(209, 75%, 95%)"
            />
            <path
              d="M151.576729,77.0747849 C149.143247,79.0342304 146.487817,80.8097027 143.644109,82.3736548 L143.808643,96.4570334 C143.821546,97.5615276 142.936637,98.4673574 141.832143,98.480261 C141.383016,98.4855081 140.945197,98.3394212 140.58921,98.065532 L127.92645,88.3230726 C123.179952,89.4155959 118.17339,90 113,90 C82.6243388,90 58,69.8528137 58,45 C58,20.1471863 82.6243388,2.13162821e-14 113,2.13162821e-14 C143.375661,2.13162821e-14 168,20.1471863 168,45 C168,51.8787435 166.113609,58.3970041 162.740995,64.2273719 C162.118982,65.3026693 161.446416,66.3545683 160.725808,67.3810149 M158.192922,70.6541306 C157.279077,71.7297754 156.309337,72.7712425 155.287144,73.7757165"
              id="Shape"
              stroke="#75A4FE"
              strokeWidth="2.5"
              fill="#FFFFFF"
              strokeLinecap="round"
            />
            <path
              d="M93,51 C89.6862915,51 87,48.3137085 87,45 C87,41.6862915 89.6862915,39 93,39 C96.3137085,39 99,41.6862915 99,45 C99,48.3137085 96.3137085,51 93,51 Z M112,51 C108.686292,51 106,48.3137085 106,45 C106,41.6862915 108.686292,39 112,39 C115.313708,39 118,41.6862915 118,45 C118,48.3137085 115.313708,51 112,51 Z M131,51 C127.686292,51 125,48.3137085 125,45 C125,41.6862915 127.686292,39 131,39 C134.313708,39 137,41.6862915 137,45 C137,48.3137085 134.313708,51 131,51 Z"
              id="Shape"
              stroke="#75A4FE"
              strokeWidth="2.5"
              fill="#E8F0FE"
            />
            <path
              d="M72.6621124,30.3111186 C71.7541174,31.8430522 70.967234,33.432891 70.3117686,35.0721208"
              id="Line"
              stroke="#a4c8ff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M91.0220003,14.0732169 C84.4692863,17.2005389 78.9371076,21.6243741 74.9392765,26.920269"
              id="Line"
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

export default MessagesIllustration;
