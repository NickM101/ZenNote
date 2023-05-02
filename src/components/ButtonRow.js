import React from 'react';
import {View, StyleSheet} from 'react-native';
import OutlinedButton from '@components/OutlinedButton.js';

const ButtonRow = ({ leftButtonTitle, leftButtonOnPress, leftButtonIcon, leftButtonIconPosition, rightButtonTitle, rightButtonOnPress, rightButtonIcon, rightButtonIconPosition }) => {
  return (
    <View style={styles.container}>
      <OutlinedButton title={leftButtonTitle} onPress={leftButtonOnPress} icon={leftButtonIcon} iconPosition={leftButtonIconPosition} />
      <View style={styles.separator} />
      <OutlinedButton title={rightButtonTitle} onPress={rightButtonOnPress} icon={rightButtonIcon} iconPosition={rightButtonIconPosition} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    width: 5,
  },
});

export default ButtonRow;
