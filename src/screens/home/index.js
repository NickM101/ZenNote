import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {GlobalStyles} from "@styles";
import LeftSideBar from "./LeftSideBar";
import MiddleComponent from "./MiddleComponent";
import RightSideBar from "./RightSideBar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={[GlobalStyles.container, styles.layout]}>
      <LeftSideBar />
      <MiddleComponent />
      <RightSideBar />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
