import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {useTheme} from "@react-navigation/native";

import {GlobalStyles} from "@styles";

const TitleComponent = ({title, date, onPress}) => {
  const { colors } = useTheme();
  
    const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: 2,
      borderBottomColor: colors.text,
      borderTopWidth: 2,
      borderTopColor: colors.text,
      paddingHorizontal: 20,
      marginVertical: 10,
      height: 50,
      width: '100%'
    },
    text: {
      ...GlobalStyles.regularText,
      color: colors.text,
    },
  });

  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={GlobalStyles.buttonText}>{title}</Text>
        <Text style={GlobalStyles.smallText}>{date}</Text>
    </Pressable>
  );
};

export default TitleComponent;
