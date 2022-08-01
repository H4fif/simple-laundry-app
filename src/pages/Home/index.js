import React from 'react';

import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Header as HeaderImage, HeaderLogo } from '../../assets/images';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={HeaderImage} style={styles.header}>
        <Image source={HeaderLogo} style={styles.logo} />
        <View style={styles.welcomeHeader}>
          <Text style={styles.welcomeGreeting}>Selamat Datang,</Text>
          <Text style={styles.welcomeUsername}>afifbasya</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  header: {
    height: windowHeight * 0.3,
    width: windowWidth,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  logo: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.3,
  },
  page: {
    flex: 1,
  },
  welcomeHeader: {
    marginTop: windowHeight * 0.025,
  },
  welcomeGreeting: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  welcomeUsername: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
});
