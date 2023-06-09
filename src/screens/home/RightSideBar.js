import React from "react";
import {StyleSheet, View, Image, Pressable} from "react-native";
import {useTheme} from "@react-navigation/native";

import zen_lamp from "@images/zen_lamp.png";
import search from "@images/draw.png";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const RightSideBar = () => {
  const {colors} = useTheme();

  const handleSearch = () => Toast.show({
      type: 'info',
      text1: "Feature Unavailable",
      text2: "This feature is currently not available. Please check back later.",
      position: "bottom",
      bottomOffset: 20
    })


  return (
    <View style={styles.container}>
      <Pressable onPress={handleSearch}>
        <Image
          source={search}
          style={styles.image}
          defaultSource={search}
          // tintColor={colors.text}
        />
      </Pressable>
      <View style={[styles.line, { backgroundColor: colors.placeholder }]}/>
      <View />
    </View>
  );
};

export default RightSideBar;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  image: {
    borderRadius: 50,
    height: 30,
    width: 30,
  },
  line: {
    height: 50,
    width: 5,
    borderRadius: 10,
  }
});
