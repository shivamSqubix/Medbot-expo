import * as React from "react";
import { Path, Svg } from "react-native-svg";
const ArrowLeft = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.747 10.377 6.125 21l10.622 10.622M35.874 21H6.422"
    />
  </Svg>
);
export default ArrowLeft;
