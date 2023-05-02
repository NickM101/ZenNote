import React, {useState} from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import {useTheme} from "@react-navigation/native";

import {GlobalStyles} from "@styles";
import light_eye from "@images/light_eye.png";
import dark_eye from "@images/dark_eye.png";
import light_blind from "@images/light_blind.png";
import dark_blind from "@images/dark_blind.png";

const PasswordInput = ({icon, onChangeText, value, placeholder, error}) => {
  const {colors} = useTheme();
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      marginBottom: 16,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 5,
      paddingHorizontal: 16,
      height: 56,
    },
    input: {
      flex: 1,
      ...GlobalStyles.regularText,
      color: colors.text,
    },
    iconContainer: {
      padding: 8,
    },
  
    text: {
      ...GlobalStyles.regularText,
      color: colors.text,
    },
    error: {
      fontSize: 12,
      marginTop: 4,
      marginLeft: 8,
    },
    image: {
      height: 24,
      width: 24
    }
  });
console.log(colors.text)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Password</Text>

      <View
        style={[styles.inputContainer, error && {borderColor: colors.error}]}
      >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.text}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}
        >
        { hidePassword ? <Image style={styles.image} source={colors.text === '#FFF' ? light_eye : dark_eye} /> : <Image style={styles.image} source={colors.text === '#FFF' ? light_blind : dark_blind} />}
        </TouchableOpacity>
      </View>
      {error && (
        <Text style={[styles.error, {color: colors.error}]}>{error}</Text>
      )}
    </View>
  );
};

export default PasswordInput;
