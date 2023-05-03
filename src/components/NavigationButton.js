import React from "react";
import {useTheme} from "@react-navigation/native";
import {TouchableOpacity, Image, StyleSheet} from "react-native";

const NavigationButton = ({image, onPress, back = true}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={image} style={back ? styles.image : null } tintColor={colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  image: {
    height: 32,
    width: 32,
  },
  custom: {
    height: 20,
    width: 20,
  }
});

export default NavigationButton;
