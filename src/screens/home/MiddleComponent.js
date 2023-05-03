import React from "react";
import {StyleSheet, Text, View, Image, Pressable} from "react-native";
import { useTheme } from "@react-navigation/native";

import {OutlinedButton, Divider} from '@components';
import { GlobalStyles } from '@styles';

import zen_lamp from "@images/zen_lamp.png";

const MiddleComponent = () => {
  const { colors } = useTheme();

  const handleBrowseNotes = () => {
    console.log("Browse Notes")
  };

  return (
    <View style={styles.container}>
      <Image source={zen_lamp} style={styles.image} />
      <View style={styles.buttonContainer}>
        <OutlinedButton title={'New Note'} />
        <Divider />
        <Pressable onPress={handleBrowseNotes}>
        <Text style={[GlobalStyles.buttonText, { color: colors.text }]}>Browse Notes</Text>
        </Pressable>
      </View>
      <View />
    </View>
  );
};

export default MiddleComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 400,
  },
  buttonContainer: {
    alignItems: 'center'
  }
});
