import React from "react";
import { lighten } from "polished";

import { TVectorProps } from "../../types/vectors";
import theme from "../../theme";

function LocationIllustration({
  height = "121px",
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
      viewBox="0 0 167 121"
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
        <g id="NoGPS" transform="translate(-47.000000, -48.000000)">
          <g id="Group" transform="translate(47.000000, 48.000000)">
            <path
              d="M129,87 L46,87 C42.1340068,87 39,83.8659932 39,80 C39,76.1340068 42.1340068,73 46,73 L7,73 C3.13400675,73 0,69.8659932 0,66 C0,62.1340068 3.13400675,59 7,59 L47,59 C50.8659932,59 54,55.8659932 54,52 C54,48.1340068 50.8659932,45 47,45 L22,45 C18.1340068,45 15,41.8659932 15,38 C15,34.1340068 18.1340068,31 22,31 L62,31 C58.1340068,31 55,27.8659932 55,24 C55,20.1340068 58.1340068,17 62,17 L160,17 C163.865993,17 167,20.1340068 167,24 C167,27.8659932 163.865993,31 160,31 L120,31 C123.865993,31 127,34.1340068 127,38 C127,41.8659932 123.865993,45 120,45 L142,45 C145.865993,45 149,48.1340068 149,52 C149,55.8659932 145.865993,59 142,59 L131.826087,59 C126.951574,59 123,62.1340068 123,66 C123,68.5773288 125,70.9106622 129,73 C132.865993,73 136,76.1340068 136,80 C136,83.8659932 132.865993,87 129,87 Z M160,59 C156.134007,59 153,55.8659932 153,52 C153,48.1340068 156.134007,45 160,45 C163.865993,45 167,48.1340068 167,52 C167,55.8659932 163.865993,59 160,59 Z"
              id="Background"
              fill={colors.light}
            />
            <path
              d="M25.770671,45 L24.8228029,45 C18.7592394,45 13.84375,40.0917143 13.84375,34.037037 C13.84375,27.9823598 18.7592394,23.0740741 24.8228029,23.0740741 C24.861946,23.0740741 24.9010412,23.0742786 24.9400876,23.0746867 C25.9161252,14.58311 32.864638,8 41.2913823,8 C50.1731223,8 57.4126894,15.3132025 57.7478347,24.4661317 C63.118229,24.8127937 67.84375,30.0395888 67.84375,35.4897099 C67.84375,39.9647189 64.5297298,45 60.6035658,45 L33.3020171,45"
              id="cloud"
              stroke={colors.default}
              strokeWidth="2.5"
              fill="#FFFFFF"
              strokeLinecap="round"
            />
            <path
              d="M86.6891949,103.551552 C110.075701,74.7159659 121.75,53.4620704 121.75,40 C121.75,18.5989659 104.401034,1.25 83,1.25 C61.5989659,1.25 44.25,18.5989659 44.25,40 C44.25,53.4620708 55.9242991,74.715967 79.3108061,103.551553 C80.963269,105.589038 83.9545611,105.901161 85.9920458,104.248701 C86.2479819,104.04113 86.4816232,103.807488 86.6891949,103.551552 Z"
              id="Shape"
              stroke={colors.dark}
              strokeWidth="2.5"
              fill="#FFFFFF"
            />
            <path
              d="M65.700936,99 C63.2166117,99.4447811 60.9224334,99.9824107 58.8662181,100.597861 M54.7112883,102.0861 C50.4908011,103.903306 48,106.142558 48,108.564648 C48,114.63978 63.6700338,119.564648 83,119.564648 C102.329966,119.564648 118,114.63978 118,108.564648 C118,104.534543 111.104095,101.010634 100.818421,99.0948494"
              id="Shape"
              stroke={colors.default}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M83,58.75 C93.3553391,58.75 101.75,50.3553391 101.75,40 C101.75,29.6446609 93.3553391,21.25 83,21.25 C72.6446609,21.25 64.25,29.6446609 64.25,40 C64.25,44.2881059 65.6921995,48.3526084 68.3009177,51.6417053 C69.5726578,53.2451275 71.0990747,54.6331427 72.81594,55.7459988 C75.8253841,57.6966925 79.3330341,58.75 83,58.75 Z"
              id="Oval"
              stroke={colors.dark}
              strokeWidth="2.5"
              fill={colors.light}
            />
            <path
              d="M105.690674,87 L105,87 C100.581722,87 97,83.418278 97,79 C97,74.581722 100.581722,71 105,71 C105.028522,71 105.057009,71.0001493 105.085461,71.000447 C105.796661,64.8038911 110.859766,60 117,60 C123.471771,60 128.746957,65.3366613 128.991164,72.0158259 C132.904357,72.2687954 136.347656,76.0829432 136.347656,80.0600586 C136.347656,83.3256057 133.932861,87 131.072021,87 L111.178467,87"
              id="cloud"
              stroke={colors.default}
              strokeWidth="2.5"
              fill="#FFFFFF"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default LocationIllustration;
