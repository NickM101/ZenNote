import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RNBootSplash from "react-native-bootsplash";
import {NavigationContainer} from "@react-navigation/native";
import { useColorScheme } from "react-native";

import Routing from "./src/config/routes";
import {lightTheme, darkTheme} from "@styles/index.js"
export default function App() {
  

  const scheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? darkTheme : lightTheme}
          onReady={() => RNBootSplash.hide({fade: true})}
        >
          <Routing />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
