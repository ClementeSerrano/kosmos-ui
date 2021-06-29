import React from "react";

import { TVectorProps } from "../../types/vectors";

export default function StrikethroughIcon({
  height = "14px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 16 13" fill="none" style={style}>
      <path
        d="M8.44513 5.83333C6.80347 5.31667 5.72013 4.39167 5.72013 3.41667C5.72013 2.29167 6.7868 1.41667 8.30347 1.41667C9.99513 1.41667 11.1868 2.25833 11.1868 3.33333C11.1868 3.675 11.4701 3.95833 11.8118 3.95833C12.1535 3.95833 12.4368 3.675 12.4368 3.33333C12.4368 1.525 10.7285 0.25 8.30347 0.25C6.0118 0.25 4.3868 1.55833 4.3868 3.41667C4.3868 4.36667 4.9618 5.24167 5.8868 5.83333H1.05347C0.7118 5.83333 0.428467 6.11667 0.428467 6.45833C0.428467 6.8 0.7118 7.08333 1.05347 7.08333H15.2201C15.5618 7.08333 15.8451 6.8 15.8451 6.45833C15.8451 6.11667 15.5618 5.83333 15.2201 5.83333H8.44513ZM10.7535 8.33333C10.8368 8.575 10.8868 8.85 10.8868 9.08333C10.8868 10.2083 9.82013 11.0833 8.30347 11.0833C6.6118 11.0833 5.4118 10.2417 5.4118 9.16667C5.4118 8.825 5.12847 8.54167 4.7868 8.54167C4.44513 8.54167 4.1618 8.825 4.1618 9.16667C4.1618 10.975 5.87847 12.25 8.30347 12.25C10.5951 12.25 12.2201 10.9417 12.2201 9.08333C12.2201 8.85 12.1868 8.575 12.1368 8.33333H10.7535Z"
        fill={color}
      />
    </svg>
  );
}
