import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Logo, SplashBackground } from '../../assets';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  });

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  },
});
