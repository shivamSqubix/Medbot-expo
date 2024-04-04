import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Chat from "../screens/Chat";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
    initialRouteName="Chat"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
