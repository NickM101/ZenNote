import React from "react";
import {StyleSheet} from "react-native";

export const lightTheme = {
  dark: false,
  colors: {
    primary: "#DDDBC7",
    background: "#DDDBC7",
    card: "#DDDBC7",
    text: "#000",
    border: "#000",
    notification: "##fcfbf9",
    error: 'red'
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: "#3d3c36",
    background: "#3d3c36",
    card: "#3d3c36",
    text: "#FFF",
    border: "#FFF",
    notification: "##fcfbf9",
    error: 'red'
  },
};

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    alignSelf: "center",
    height: 400,
    width: 300,
  },
  spacer20: {
    height: 20
  },
  spacer50: {
    height: 50,
  },
  headingText: {
    fontSize: 26,
    lineHeight: 36,
    fontFamily: "ZillaSlab-Bold",
  },
  regularText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "ZillaSlab-Medium",
  },
  smallText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "ZillaSlab-Regular",
    textAlign: 'center'
  },
  smallBoldText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: "ZillaSlab-Bold",
    textAlign: 'center'
  },
  captionText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "ZillaSlab-Light",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "ZillaSlab-Bold",
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center'
  },

});
