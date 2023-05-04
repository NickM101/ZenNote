import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import IntroScreen from "@auth/IntroScreen.js";
import SignInScreen from "@auth/SignInScreen.js";
import SignUpScreen from "@auth/SignUpScreen.js";
import HomeScreen from "../../screens/home";
import NewNote from "../../screens/editor";
import PreviewNotes from "../../screens/preview";

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
      <Stack.Navigator initialRouteName="NewNote" screenOptions={{
        headerShown: false,
        
      }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewNote" component={NewNote} />
        <Stack.Screen name="PreviewNote" component={PreviewNotes} />
      </Stack.Navigator>
  );
};

export default Routing;
