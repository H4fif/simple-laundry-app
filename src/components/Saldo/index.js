import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonAction from '../ButtonIcon';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelSaldoHeader}>Saldo :</Text>
          <Text style={styles.labelSaldoValue}>Rp 100.000</Text>
        </View>

        <View style={styles.labelWrapper}>
          <Text style={styles.labelPointHeader}>Antar Poin: </Text>
          <Text style={styles.labelPointValue}>100 poin</Text>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <ButtonAction title={'Add Saldo'} />
        <ButtonAction title={'Get Point'} />
      </View>
    </View>
  );
};

export default Saldo;
