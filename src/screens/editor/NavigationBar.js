import React from "react";
import {View, TouchableOpacity, Text, StyleSheet, Image} from "react-native";
import {useNavigation, useTheme} from "@react-navigation/native";

import {GlobalStyles} from "@styles";
import back from "@images/back.png";
const NavigationBar = ({onPreviewPress}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.back} tintColor={colors.text} />
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={onSavePress}>
        <Text style={[GlobalStyles.buttonText, {color: colors.text, marginLeft: 40}]}>Save</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={onPreviewPress}>
        <Text style={[GlobalStyles.buttonText, {color: colors.text}]}>
          Preview
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 10,
  },
  back: {
    height: 32,
    width: 32,
  },
  menu: {
    height: 28,
    width: 28,
  },
});

export default NavigationBar;
