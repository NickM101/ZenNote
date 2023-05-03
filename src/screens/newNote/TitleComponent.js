import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {useTheme} from "@react-navigation/native";

import {GlobalStyles} from "@styles";

const TitleComponent = ({value, onChangeText}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 2,
      borderBottomColor: colors.text,
      borderTopWidth: 2,
      borderTopColor: colors.text,
      height: 55,
      paddingHorizontal: 20,
      ...GlobalStyles.regularText,
      color: colors.text,
    },
  });

  return (
    <TextInput
      style={styles.container}
      placeholder="The Title"
      placeholderTextColor={'#a9a9a9'}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="words"
      autoCorrect={true}
    />
  );
};

export default TitleComponent;
