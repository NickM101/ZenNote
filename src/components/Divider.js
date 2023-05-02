import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { GlobalStyles } from '../config/theme';

const Divider = () => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginBottom: 16,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.border,
      },
      text: {
        marginHorizontal: 8,
        color: colors.text,
        ...GlobalStyles.regularText,
      }
    });
    

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};


export default Divider;
