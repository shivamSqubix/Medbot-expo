import {
  View,
  ScrollView,
  useWindowDimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { Nurse } from "../../assets/svgs/Nurse";
import { Mobile } from "../../assets/svgs/Mobile";
import { Speaker } from "../../assets/svgs/Speaker";
import Heading from "../atoms/Heading";

export default function Carousel() {
  const [activePage, setActivePage] = useState(0);
  const scrollViewRef = useRef();

  const { width, height } = useWindowDimensions();

  const changePage = (page) => {
    scrollViewRef.current.scrollTo({ x: page * width, animated: true });
  };
  const screens = [
    {
      id: 1,
      title: "What is MedBot ?",
      desc: "Meet MedBot, a medical practitioner's personal AI assistant for quick solutions to any medical prompts.",
      component: Nurse,
    },
    {
      id: 2,
      title: "Explore Categories",
      desc: "Ask question to MedBot with help of different categories & get answer that you want.",
      component: Mobile,
    },
    {
      id: 3,
      title: "Understands your language",
      desc: "Picks up what you speak in the language you are comfortable with, replies in text/voice the way you like it.",
      component: Speaker,
    },
  ];

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const newPage = Math.round(e.nativeEvent.contentOffset.x / width);
          if (activePage !== newPage) {
            setActivePage(newPage);
          }
        }}
        scrollEventThrottle={16}
        className="flex-1"
      >
        {screens.map((screen, index) => (
          <View
            key={index}
            className="px-7 h-full flex-1 justify-center"
            style={{ width }}
          >
            <View className="w-full h-2/4">
              <screen.component />
            </View>
            <Heading
              text={screen.title}
              color="white"
              fontFamily={"Sansation_Regular"}
              fontWeight={400}
              fontSize={28}
              lineHeight={38}
              mt={20}
            />
            <Heading
              text={screen.desc}
              color="white"
              fontFamily={"Sansation_Regular"}
              fontWeight={400}
              fontSize={16}
              lineHeight={21}
              mt={20}
            />
          </View>
        ))}
      </ScrollView>
      <View className="flex-row align-middle justify-center mb-5">
        {screens.map((_, i) => (
          <Pressable onPress={() => changePage(i)} key={i}>
            <View className="h-2 w-2 rounded-full bg-white mx-2" />
          </Pressable>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => changePage((activePage + 1) % screens.length)}
        style={{
          alignSelf: "center",
          marginBottom: 20,
          height: 80,
          width: 80,
        }}
      >
        {/* <NextArrow /> */}
      </TouchableOpacity>
    </View>
  );
}
