import React from "react";
import {View, Image, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {OutlinedButton, CustomTextInput, PasswordInput} from "@components";
import {GlobalStyles} from "@styles";
import zen_note from "@images/zen_note_logo.png";
import zen_lamp from "@images/zen_lamp.png";


const initialState = {
  username: '',
  password: '',
  email: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
      case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}


const SignUpScreen = ({ navigation }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: null,
      headerTransparent: true,
      headerLeft: () => <Image 
          source={zen_note}
          style={styles.logo}
      />,
    },
    )
  }
  );

  const handleSubmit = () => {
    navigation.navigate("Home");
  }


  return (
    <SafeAreaView
    style={{justifyContent: 'space-evenly', ...GlobalStyles.container}}
    >
      <Image source={zen_lamp} style={styles.image} />
      <View>
      <CustomTextInput
      label={'Username'}
        value={state.username}
        onChangeText={(text) => dispatch({ type: 'SET_USERNAME', payload: text })}
        error={""}
      />
      <CustomTextInput
      label={'Email Address'}
        value={state.email}
        onChangeText={(text) => dispatch({ type: 'SET_EMAIL', payload: text })}
        error={""}
      />
      <PasswordInput
        value={state.password}
        onChangeText={(text) => dispatch({ type: 'SET_PASSWORD', payload: text })}
        error={""}
        placeholder={"****"}
      />
      </View>
      <OutlinedButton title={"Sign Up"} onPress={handleSubmit} fill={true} />
     
      <View style={GlobalStyles.spacer20} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 200,
    height: 250,
  },
  logo: {
    width: 50,
    height: 50,
  }
})

export default SignUpScreen;