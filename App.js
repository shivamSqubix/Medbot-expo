import { NavigationContainer } from "@react-navigation/native";

import "./global.css";
import Navigation from "./src/navigation/Navigation";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";


export default function App() {
  let [fontsLoaded] = useFonts(
    {
      "Sansation_Regular": require("./src/assets/fonts/Sansation_Regular.ttf"),
      "Sansation_Bold": require("./src/assets/fonts/Sansation_Bold.ttf"),
      "Sansation_Light": require("./src/assets/fonts/Sansation_Light.ttf"),
      "Sansation_Italic": require("./src/assets/fonts/Sansation_Italic.ttf"),
      "Sansation_Light_Italic": require("./src/assets/fonts/Sansation_Light_Italic.ttf"),
    }
  )
  return (
    <>
    <StatusBar translucent backgroundColor="transparent" style="light"/>
    <NavigationContainer>
     <Navigation />
    </NavigationContainer>
    </>
  );
}
