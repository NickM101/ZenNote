import React from "react";
import {Text, View, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useTheme} from "@react-navigation/native";

import zen_lamp from "@images/zen_lamp.png";
import {OutlinedButton} from "@components";
import {GlobalStyles} from "@styles";

const IntroScreen = ({navigation}) => {
  const {colors} = useTheme();

  const handleLeftButtonPress = () => {
    navigation.navigate("SignIn");
  };

  const handleRightButtonPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView
      style={[
        GlobalStyles.container,
        {
          alignItems: "center",
        },
      ]}
    >
      <Image source={zen_lamp} style={GlobalStyles.image} />
      <View style={GlobalStyles.spacer50} />
      <Text
        style={[
          GlobalStyles.headingText,
          {
            color: colors.text,
            marginBottom: 10,
          },
        ]}
      >
        Welcome to{" "}
        <Text style={{fontFamily: "ZillaSlab-BoldItalic"}}>Zen Note</Text>
      </Text>
      <Text style={[GlobalStyles.smallText, {color: colors.text}]}>
      ZenNote is a lightweight and intuitive note-taking application designed for modern mobile devices. With a clean and minimalist user interface</Text>
      <View style={GlobalStyles.spacer50} />
      <OutlinedButton title={"Get Started"} onPress={() => navigation.navigate('Home')} fill={true} />
      {/* <ButtonRow
        leftButtonTitle="Sign In"
        leftButtonOnPress={handleLeftButtonPress}
        rightButtonTitle="Sign Up"
        rightButtonOnPress={handleRightButtonPress}
      /> */}
    </SafeAreaView>
  );
};

export default IntroScreen;
