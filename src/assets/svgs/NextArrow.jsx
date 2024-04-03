import Svg, { G, Ellipse, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const NextArrow = () => (
  <Svg viewBox="0 0 79 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G filter="url(#filter0_d_1984_1686)">
      <Ellipse
        cx={39.3208}
        cy={36.7903}
        rx={26.4927}
        ry={26.0925}
        fill="white"
      />
    </G>
    <Path
      d="M36.6702 31.5717L41.9688 36.7903L36.6702 42.0088"
      stroke="black"
      strokeWidth={1.5}
    />
    <Defs></Defs>
  </Svg>
);
export default NextArrow;
