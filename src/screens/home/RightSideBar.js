import React from "react";
import {StyleSheet, View, Image, Pressable} from "react-native";
import {useTheme} from "@react-navigation/native";

import light_search from "@images/light_search.png";
import dark_search from "@images/dark_search.png";
const RightSideBar = () => {
  const {colors} = useTheme();

  const handleSearch = () => {
    console.log('Searching');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleSearch}>
        <Image
          source={colors.text === "#FFF" ? light_search : dark_search}
          style={styles.image}
        />
      </Pressable>
      <View style={[styles.line, { color: colors.text }]}/>
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
    height: 24,
    width: 24,
  },
  line: {
    height: 10,
    width: 20,
    borderRadius: 10,
    transform: [{ rotate: "-90deg" }],

  }
});
