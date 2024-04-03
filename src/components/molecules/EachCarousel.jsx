import { View, Text, ViewComponent, useWindowDimensions } from "react-native";
import React from "react";
import Heading from "../atoms/Heading";
import { Nurse } from "../../assets/svgs/Nurse.jsx";
import { Mobile } from "../../assets/svgs/Mobile.jsx";
import {Speaker}  from "../../assets/svgs/Speaker.jsx";

export default function EachCarousel({screen}) {
    console.log(screen);
    const RenderComponent = {
        "Nurse": Nurse,
        "Mobile": Mobile,
        "Speaker": Speaker,
    }[screen.component];
  const { width } = useWindowDimensions();
  return (
    <Text className="text-white text-center text-2xl ">sds</Text>
  );
}
