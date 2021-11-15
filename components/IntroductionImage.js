import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function IntroductionImage() {
    return (
        <View >
          <Image style={styles.image}  source={require('../Images/photo_darshan.jpg')}  />
          <Text style={styles.nameTitle}> Hi!! I'am Darshan </Text>
        </View >
    )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    borderRadius: 5
  },
  nameTitle: {
    fontSize:30,
    margin: '2%',
    fontFamily: 'Helvetica-Light',
  }
});