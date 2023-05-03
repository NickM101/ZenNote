import React from "react";
import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {ButtonRow, UsernameInput, PasswordInput, Divider,OutlinedButton, Header} from "@components";
import {GlobalStyles} from "@styles";
import GoogleIcon from "@images/google.png";
import FacebookIcon from "@images/facebook.png";

const initialState = {
  username: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}


const SignInScreen = ({ navigation }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleSubmit = () => {
    console.log(state);
    navigation.navigate("Home");
  }

  const handleLeftButtonPress = () => {
    navigation.navigate("SignIn");
  };

  const handleRightButtonPress = () => {
    navigation.navigate("SignUp");
  };

  console.log("render")

  return (
    <SafeAreaView
      style={[GlobalStyles.container]}
    >
      <Header />
      <UsernameInput
        value={state.username}
        onChangeText={(text) => dispatch({ type: 'SET_USERNAME', payload: text })}
        error={""}
      />
      <PasswordInput
        value={state.password}
        onChangeText={(text) => dispatch({ type: 'SET_PASSWORD', payload: text })}
        error={""}
        placeholder={"****"}
      />
      <OutlinedButton title={"Sign In"} onPress={handleSubmit} fill={true} />
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