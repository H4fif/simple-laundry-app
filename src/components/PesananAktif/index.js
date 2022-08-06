import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { MesinCuciIcon } from '../../assets';

const PesananAktif = ({ title, status }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <MesinCuciIcon />

      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PesananAktif;
