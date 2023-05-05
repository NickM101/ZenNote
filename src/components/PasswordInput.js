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
import eye from "@images/eye.png";
import blind from "@images/blind.png";

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
          placeholderTextColor={'#a9a9a9'}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}
        >
        { hidePassword ? <Image style={styles.image} source={eye} tintColor={colors.text} /> : <Image style={styles.image} source={blind} tintColor={colors.text} />}
        </TouchableOpacity>
      </View>
      {error && (
        <Text style={[styles.error, {color: colors.error}]}>{error}</Text>
      )}
    </View>
  );
};

export default PasswordInput;
