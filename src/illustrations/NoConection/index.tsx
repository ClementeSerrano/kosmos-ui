import React from "react";
import { lighten } from "polished";

import { TVectorProps } from "../../types/vectors";
import theme from "../../theme";

function NoConectionIllustration({
  height = "87px",
  colors = {
    dark: theme.colorsPalette.blue.default,
    default: lighten(0.25, theme.colorsPalette.blue.default),
    light: lighten(0.45, theme.colorsPalette.blue.default),
  },
  style,
  className,
}: TVectorProps): JSX.Element {
  return (
    <svg
      height={height}
      viewBox="0 0 216 87"
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
        <g id="NoConnection" transform="translate(-17.000000, -55.000000)">
          <g id="Group" transform="translate(17.000000, 57.000000)">
            <path
              d="M46,77 C42.1340068,77 39,73.8659932 39,70 C39,66.1340068 42.1340068,63 46,63 L7,63 C3.13400675,63 4.73447626e-16,59.8659932 0,56 C-4.73447626e-16,52.1340068 3.13400675,49 7,49 L47,49 C50.8659932,49 54,45.8659932 54,42 C54,38.1340068 50.8659932,35 47,35 L22,35 C18.1340068,35 15,31.8659932 15,28 C15,24.1340068 18.1340068,21 22,21 L62,21 C58.1340068,21 55,17.8659932 55,14 C55,10.1340068 58.1340068,7 62,7 L119,7 C122.865993,7 126,10.1340068 126,14 C126,17.8659932 122.865993,21 119,21 L183,21 C186.865993,21 190,24.1340068 190,28 C190,31.8659932 186.865993,35 183,35 L205,35 C208.865993,35 212,38.1340068 212,42 C212,45.8659932 208.865993,49 205,49 L186,49 C182.134007,49 179,52.1340068 179,56 C179,59.8659932 182.134007,63 186,63 L192,63 C195.865993,63 199,66.1340068 199,70 C199,73.8659932 195.865993,77 192,77 L46,77 Z M209,77 C205.134007,77 202,73.8659932 202,70 C202,66.1340068 205.134007,63 209,63 C212.865993,63 216,66.1340068 216,70 C216,73.8659932 212.865993,77 209,77 Z"
              id="Background"
              fill={colors.light}
            />
            <path
              d="M75,83 C62.8497355,83 53,73.3741221 53,61.5 C53,49.6258779 62.8497355,40 75,40 C75.516677,40 76.029194,40.0174063 76.5369705,40.0516517 C76.1841654,38.087799 76,36.0654066 76,34 C76,15.2223185 91.2223185,0 110,0 C124.991043,0 137.716066,9.70198454 142.238615,23.1694983 C143.310147,23.0574596 144.398251,23 145.5,23 C162.344685,23 176,36.4314575 176,53 C176,68.7406088 163.675305,81.727337 148,82.9781847 L148,83 L91.5078125,83 M86.9959717,83 L80.0313721,83"
              id="Shape"
              stroke={colors.dark}
              strokeWidth="2.5"
              fill="#FFFFFF"
              strokeLinecap="round"
            />
            <path
              d="M133.440285,12 C126.931394,13.7225775 121.79208,18.8128579 120,25.2931851"
              id="Oval"
              stroke={colors.default}
              strokeWidth="2.5"
              strokeLinecap="round"
              transform="translate(126.720142, 18.646593) scale(-1, 1) translate(-126.720142, -18.646593) "
            />
            <path
              d="M105,51 C105,47.1340068 101.865993,44 98,44 C94.1340068,44 91,47.1340068 91,51"
              id="Oval"
              stroke={colors.dark}
              strokeWidth="2.5"
              strokeLinecap="round"
              transform="translate(98.000000, 47.500000) rotate(-180.000000) translate(-98.000000, -47.500000) "
            />
            <path
              d="M134,51 C134,47.1340068 130.865993,44 127,44 C123.134007,44 120,47.1340068 120,51"
              id="Oval"
              stroke={colors.dark}
              strokeWidth="2.5"
              strokeLinecap="round"
              transform="translate(127.000000, 47.500000) rotate(-180.000000) translate(-127.000000, -47.500000) "
            />
            <path
              d="M105,63 L119.5,63"
              id="Line"
              stroke={colors.dark}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M40.21,3.292 L52.156,3.292 L52.156,5.382 L43.004,16.624 L52.376,16.624 L52.376,19 L39.506,19 L39.506,16.756 L48.658,5.668 L40.21,5.668 L40.21,3.292 Z M56.88,18.576 L65.568,18.576 L65.568,20.096 L58.912,28.272 L65.728,28.272 L65.728,30 L56.368,30 L56.368,28.368 L63.024,20.304 L56.88,20.304 L56.88,18.576 Z"
              id="Zz"
              fill={colors.dark}
              fillRule="nonzero"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default NoConectionIllustration;
