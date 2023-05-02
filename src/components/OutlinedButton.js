import React from 'react';
import {  Text, Image, StyleSheet, View, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyles } from '../config/theme';

const OutlinedButton = ({ title, onPress, icon, iconPosition = 'left' }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 170,
      borderColor: colors.border
    },
    iconContainer: {
      marginRight: 2,
    },
    icon: {
      width: 24,
      height: 24,
    },
  });

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      {icon && iconPosition === 'left' && (
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
      )}
      <Text style={[GlobalStyles.buttonText, {color:colors.text}]}>{title}</Text>
      {icon && iconPosition === 'right' && (
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
      )}
    </Pressable>
  );
};



export default OutlinedButton;
