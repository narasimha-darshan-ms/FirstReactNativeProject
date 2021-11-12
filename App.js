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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <ScrollView>
          <View >
            <Image style={styles.image}  source={require('./Images/photo_darshan.jpg')}  />
            <Text style={styles.nameTitle}> Hi!! I'am Darshan </Text>
          </View>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis nemo earum sed aliquid qui distinctio voluptatum illum quia, mollitia libero nihil amet, maiores cumque deserunt debitis, nisi doloremque quas.

          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 5
  },
  nameTitle: {
    fontSize:30,
    margin: '2%',
    fontFamily: 'Helvetica-Light',
    
  },
});

export default App;