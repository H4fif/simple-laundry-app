import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Header as HeaderImage, HeaderLogo } from '../../assets/images';
import { ButtonIcon, Saldo } from '../../components';
import styles from './styles';

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

      <Saldo />

      <View style={styles.layanan}>
        <Text style={styles.label}>Layanan Kami</Text>

        <View style={styles.iconLayananWrapper}>
          <ButtonIcon title="Kiloan" type="layanan" />
          <ButtonIcon title="Satuan" type="layanan" />
          <ButtonIcon title="VIP" type="layanan" />
          <ButtonIcon title="Karpet" type="layanan" />
          <ButtonIcon title="Setrika Saja" type="layanan" />
          <ButtonIcon title="Express" type="layanan" />
        </View>
      </View>
    </View>
  );
};

export default Home;
