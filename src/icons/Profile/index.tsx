import React from "react";

import { TVectorProps } from "../../types/vectors";

function ProfileIcon({
  height = "24px",
  color = "currentColor",
  style,
}: TVectorProps) {
  return (
    <svg height={height} viewBox="0 0 100 100" fill={color} style={style}>
      <path d="M50,5C25.0999756,5,5,25.0999756,5,50s20.0999756,45,45,45c24.8999634,0,45-20.0999756,45-45S74.8999634,5,50,5z   M49.9998169,16.4312134c9.2697144,0,16.7843628,7.5146484,16.7843628,16.7843628  C66.7841797,42.4853516,59.2695312,50,49.9998169,50c-9.2697754,0-16.7844238-7.5146484-16.7844238-16.7844238  C33.2153931,23.9458618,40.7300415,16.4312134,49.9998169,16.4312134z M49.9998779,85  c-9.4983559,0-18.1192551-3.8087234-24.4305134-9.9734802c-1.2437763-1.2149048-1.711607-3.0214005-1.2959862-4.7096634  l0.9647808-3.9189682c1.6175537-6.7936401,7.6252441-11.5392456,14.6091309-11.5392456H60.15271  c6.984314,0,12.9912109,4.744751,14.6087036,11.5392456l0.9315567,4.0395508  c0.3861008,1.6742783-0.0920715,3.4522095-1.3241653,4.6498032C68.0630569,81.216423,59.467186,85,49.9998779,85z" />
    </svg>
  );
}

export default ProfileIcon;
