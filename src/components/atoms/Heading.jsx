import { View, Text } from "react-native";
import React from "react";

export default function Heading({
  text,
  height,
  width,
  color,
  fontSize,
  fontWeight,
  textAlign,
  fontFamily,
  lineHeight,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,

}) {
  return (
    <Text
      style={{
        height,
        width,
        color,
        fontSize,
        fontWeight,
        textAlign,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        paddingTop: pt,
        paddingBottom: pb,
        paddingLeft: pl,
        paddingRight: pr,
        fontFamily,
        lineHeight,
        }}
    >
      {text}
    </Text>
  );
}
