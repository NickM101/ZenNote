import React from "react";
import {StyleSheet, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import ButtonRow from "@components/ButtonRow";
import UsernameInput from "@components/UsernameInput";
import PasswordInput from "@components/PasswordInput";
import Divider from "@components/Divider";
import {GlobalStyles} from "@styles";
import GoogleIcon from "@images/google.png";
import FacebookIcon from "@images/facebook.png";
import Header from "@components/Header";

const SignInScreen = () => {
  const {username, setUsername} = React.useState("");

  const handleLeftButtonPress = () => {
    navigation.navigate("SignIn");
  };

  const handleRightButtonPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView
      style={[GlobalStyles.container]}
    >
      <Header />
      <UsernameInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        error={""}
      />
      <PasswordInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        error={""}
        placeholder={"****"}
      />
      <View style={GlobalStyles.spacer20} />
      <Divider />
      <View style={GlobalStyles.spacer20} />
      <ButtonRow
        leftButtonTitle="Continue with Google"
        leftButtonOnPress={handleLeftButtonPress}
        leftButtonIcon={GoogleIcon}
        rightButtonTitle="Continue with Facebook"
        rightButtonOnPress={handleRightButtonPress}
        rightButtonIcon={FacebookIcon}
      />
      <View style={GlobalStyles.spacer20} />
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 60,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    alignSelf: "center",
    height: 250,
    width: 200,
  },
});
