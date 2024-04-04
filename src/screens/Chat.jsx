import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import LottieView from "lottie-react-native";
import Heading from "../components/atoms/Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Chat() {
  const { width, height } = useWindowDimensions();
  const [messages, setMessages] = useState([
    { sender: "user", text: "Hi!" },
    { sender: "bot", text: "Hello! How can I help you?" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    setMessages([...messages, { sender: "user", text: inputText }]);
    setInputText("");
  };

  return (
    <SafeAreaView className="flex-1">
      <LottieView
        source={require("../assets/json/background.json")}
        autoPlay
        loop
        resizeMode="cover"
        style={{ width, height: height * 1.06 }}
      />
      <View
        className="absolute pt-12 flex-1"
        style={{ height: height * 1.05, width }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View className="top-0 pl-4 flex-1">
            <Heading
              text="MedBot"
              fontSize={20}
              fontWeight={700}
              lineHeight={22}
              color={"white"}
            />
            <Heading
              text="• Online"
              fontSize={14}
              fontWeight={400}
              lineHeight={16}
              color={"rgba(5, 255, 0, 1)"}
            />
          </View>
          {messages.map((message, index) => (
            <View
              key={index}
              style={{
                backgroundColor:
                  message.sender === "user" ? "rgba(0, 0, 0, 0.25)" : "rgba(255, 255, 255, 0.5)",
                color:
                  message.sender === "user" ? "rgba(255, 255, 255, 0.75)" : "rgba(0, 0, 0, 1)"
              }}
              className={`rounded-2xl p-5 text-sm max-w-[80%] mb-9 ${
                message.sender === "user"
                  ? "self-end mr-4 rounded-br-none"
                  : "self-start ml-4 rounded-bl-none"
              }`}
            >
              <Text
                style={{
                  color: message.sender === "user" ? "white" : "black",
                }}
              >
                {message.text}
              </Text>
            </View>
          ))}
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View className="mb-4 flex-row justify-evenly">
              <View className="flex-row items-center">
                <View
                  className="h-[50px] pl-3 border-2 rounded-l-3xl border-r-0 border-gray-500  flex justify-center"
                  style={{ width: width * 0.65 }}
                >
                  <TouchableOpacity>
                    <TextInput
                      placeholder="Hi! What can I help you with?"
                      returnKeyType="next"
                      blurOnSubmit={false}
                      autoCapitalize="none"
                      onChangeText={setInputText}
                      value={inputText}
                    />
                  </TouchableOpacity>
                </View>
                <View className="border-2 border-l-0 border-gray-500 h-[50px] px-3 rounded-r-3xl flex justify-center">
                  <MaterialCommunityIcons
                    name="microphone"
                    size={24}
                    color="white"
                    className="rounded-full p-1"
                    style={{ backgroundColor: "rgba(209, 213, 219, 0.25)" }}
                  />
                </View>
              </View>
              <View className="flex-row justify-between items-center">
                <TouchableOpacity onPress={handleSend}>
                  <MaterialCommunityIcons
                    name="send"
                    size={24}
                    color="white"
                    className="rounded-full p-2"
                    style={{ backgroundColor: "rgba(209, 213, 219, 0.25)" }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
