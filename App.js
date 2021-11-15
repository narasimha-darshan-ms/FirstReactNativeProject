import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

import IntroductionImage from "./components/IntroductionImage.js";
import Experience from './components/Experience'

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.container}>
        <IntroductionImage />
        <Text style={styles.introduction}>
          I am Darshan. I was born and brought up in Mysore, Karnataka. I have completed my Bachelors in The National Institute of Engineering, Mysore. I am a tech enthusiast. I would also like to spend my free time in gardening.
        </Text>
        <Experience />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
  },
  introduction: {
    padding: 10
  }
});

export default App;