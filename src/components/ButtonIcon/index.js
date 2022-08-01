import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import { AddSaldoIcon, GetPointIcon } from '../../assets';

const ButtonIcon = ({ title }) => {
  const Icon = () => {
    if (title?.toLowerCase() === 'add saldo') return <AddSaldoIcon />;
    if (title?.toLowerCase() === 'get point') return <GetPointIcon />;

    return <AddSaldoIcon />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.buttonWrapper}>
        <View style={styles.iconWrapper}>
          <Icon />
        </View>
        <Text style={styles.buttonLabel}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
