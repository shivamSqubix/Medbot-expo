import React, { useRef, useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import LottieView from "lottie-react-native";
import ArrowLeft from "../assets/svgs/ArrowLeft";
import NextArrow from "../assets/svgs/NextArrow";
import { Nurse } from "../assets/svgs/Nurse.jsx";
import { Mobile } from "../assets/svgs/Mobile.jsx";
import { Speaker } from "../assets/svgs/Speaker.jsx";
import Heading from "../components/atoms/Heading.jsx";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const { width, height } = useWindowDimensions();
  const [activePage, setActivePage] = useState(0);
  const scrollViewRef = useRef();
  const navigation = useNavigation();

  const changePage = (page) => {
    scrollViewRef.current.scrollTo({ x: page * width, animated: true });
  };
  const fullHeightWidth = {
    height: height,
    width: width,
  };

  const screens = [
    {
      id: 1,
      title: "What is MedBot ?",
      desc: "Meet MedBot, a medical practitioner’s personal AI assistant for quick solutions to any medical prompts.",
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
    <SafeAreaView className="flex-1" style={fullHeightWidth}>
      <LottieView
        source={require("../assets/json/background.json")}
        autoPlay
        loop
        resizeMode="cover"
        style={{ width, height: height * 1.05 }}
      />
      <View
        className="flex-1 absolute "
        style={{
          height: height * 1.05,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
        }}
      >
        {/* <View className="w-full flex-row justify-between items-center pt-11 px-5">
          <ArrowLeft />
          <Text className="text-white underline text-xl">SKIP</Text>
        </View> */}
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
                fontWeight={400}
                fontSize={28}
                lineHeight={38}
                mt={20}
              />
              <Heading
                text={screen.desc}
                color="white"
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
        {activePage !== screens.length - 1 ? (
          <View className="h-1/4 flex items-center justify-center">
            <TouchableOpacity
              onPress={() => changePage((activePage + 1) % screens.length)}
              style={{
                alignSelf: "center",
                marginBottom: 20,
                height: 80,
                width: 80,
              }}
            >
              <NextArrow />
            </TouchableOpacity>
          </View>
        ) : (
          <View className="h-1/4 flex items-center justify-center">
            <TouchableOpacity
              rippleColor = "rgba(0,0,0,1)"
              onPress={() => navigation.navigate("Chat")}
              style={{
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              <Text className="border-2 border-white rounded-3xl text-center py-4 text-white"
              style={{width:width*0.9}}
              >
                Get Started as Guest
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => changePage((activePage + 1) % screens.length)}
              onPressIn={() => navigation.navigate("Login")}
              onPressOut={() => navigation.navigate("Login")}
              style={{
                alignSelf: "center",
                marginBottom: 50,
              }}
            >
              <Text className="border-2 border-white rounded-3xl text-center py-4 text-white"
              style={{width:width*0.9}}
              >
                Login/SignUp
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
