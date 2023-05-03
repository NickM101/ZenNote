import React from 'react';
import {  Text, Image, StyleSheet, View, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyles } from '../config/theme';

const OutlinedButton = ({ title, onPress, icon, iconPosition = 'left', fill = false }) => {
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
      width: fill ? '100%' : 170 ,
      borderColor: colors.border
    },
    icon: {
      width: 30,
      height: 30,
    },
  });

  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      {icon && iconPosition === 'left' && (
        <View>
          <Image source={icon} style={styles.icon} />
        </View>
      )}
      <Text style={[GlobalStyles.buttonText, {color:colors.text}]}>{title}</Text>
      {icon && iconPosition === 'right' && (
        <View>
          <Image source={icon} style={styles.icon} />
        </View>
      )}
    </Pressable>
  );
};



export default OutlinedButton;
