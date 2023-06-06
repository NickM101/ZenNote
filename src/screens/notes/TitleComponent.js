import React from "react";
import {Pressable, StyleSheet, Text, View, useWindowDimensions} from "react-native";
import {useTheme} from "@react-navigation/native";

import {GlobalStyles} from "@styles";
import {cutStringWithEllipsis} from "../../config/utils/helper";


const TitleComponent = ({title, date, onPress}) => {
  const { colors } = useTheme();
  const {height} = useWindowDimensions();

  
    const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: 20,
      borderWidth: 2,
      borderColor: colors.text,
      paddingHorizontal: 15,
      marginVertical: 10,
      height: height / 10,
      width: '100%'
    
    },
    text: {
      ...GlobalStyles.regularText,
      color: colors.text,
    },
  });
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={{flexDirection: 'column', }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingBottom: 5}}>{title}</Text>
       {/* <Text>{cutStringWithEllipsis(description,40)}</Text> */}
      </View>
      <View />
        <Text style={GlobalStyles.smallText}>{date}</Text>
    </Pressable>
  );
};

export default TitleComponent;
