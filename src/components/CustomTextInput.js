import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import { GlobalStyles } from "@styles";

const CustomTextInput = ({ label, value, onChangeText, error }) => {
  const { colors } = useTheme();

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
      marginTop: 4,
      fontSize: 12,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>

      <TextInput
        style={[styles.inputContainer, error && { borderColor: colors.error }]}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#a9a9a9"}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {error && (
        <Text style={[styles.error, { color: colors.error }]}>{error}</Text>
      )}
    </View>
  );
};

export default CustomTextInput;
