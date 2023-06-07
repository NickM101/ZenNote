import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AvatarCircle = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/google.png')}/>
    </View>
  )
}

export default AvatarCircle

const styles = StyleSheet.create({
    container: {
        height: 20,
        width: 20,
        
    }
})