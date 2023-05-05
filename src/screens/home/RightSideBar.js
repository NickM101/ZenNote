import React from "react";
import {StyleSheet, View, Image, Pressable} from "react-native";
import {useTheme} from "@react-navigation/native";

import search from "@images/search.png";

const RightSideBar = () => {
  const {colors} = useTheme();

  const handleSearch = () => {
    console.log('Searching');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleSearch}>
        <Image
          source={search}
          style={styles.image}
          tintColor={colors.text}
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
    height: 24,
    width: 24,
  },
  line: {
    height: 50,
    width: 5,
    borderRadius: 10,
  }
});
