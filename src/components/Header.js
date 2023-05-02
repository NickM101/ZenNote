import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import zen_lamp from "@images/zen_lamp.png";
import logo from "@images/zen_note_logo.png";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.middle}>
        <Image source={zen_lamp} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <View style={styles.menuIcon} />
        {/* <Image source={logo} style={styles.menuIcon} /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    height: 250,
  },
  logo: {
    flexDirection: 'column',
    justifyContent: "flex-start",
    width: 50,
    height: 50,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    alignItems: 'flex-start',
    width: 200,
    height: 250,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
});

export default Header;
