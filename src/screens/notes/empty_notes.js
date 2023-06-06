import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Lottie from 'lottie-react-native';

const EmptyNotes = () => {
  return (
    <View style={styles.container}>
        <Lottie source={require('../../assets/json/empty-list.json')} autoPlay loop style={styles.lottie} />
      <Text style={styles.text}>Let's Get Started! {'\n'} Create and Save Your First Note!</Text>
    </View>
  )
}

export default EmptyNotes

const styles = StyleSheet.create({
    container: {
        height: 500,
    },
    lottie: {
        height: 400,
        width: 300,
        alignSelf: 'center'
    },
    text: {
        // position: 'absolute',
        // top: 300,
        // left: 60,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})