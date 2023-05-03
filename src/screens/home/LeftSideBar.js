import React from "react";
import {StyleSheet, Image, View, Text} from "react-native";

import logo from "@images/zen_note_logo.png";
import {GlobalStyles} from "@styles";

const LeftSideBar = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.textLayout}>
        Be Minimalist
      </Text>
      <View />
    </View>
  );
};

export default LeftSideBar;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: 50,
    height: 50,
  },
  textLayout: {
    ...GlobalStyles.smallBoldText,
    transform: [{ rotate: "-90deg" }],
    width: 100,
  },
});
