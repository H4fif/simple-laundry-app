import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';
import {
  AddSaldoIcon,
  ExpressIcon,
  GetPointIcon,
  KarpetIcon,
  KiloanIcon,
  SatuanIcon,
  SetrikaIcon,
  VIPIcon,
} from '../../assets';

const ButtonIcon = ({ title, type }) => {
  const Icon = () => {
    switch (title?.trim()?.toLowerCase()) {
      case 'add saldo':
        return <AddSaldoIcon />;
      case 'get point':
        return <GetPointIcon />;
      case 'kiloan':
        return <KiloanIcon />;
      case 'satuan':
        return <SatuanIcon />;
      case 'vip':
        return <VIPIcon />;
      case 'karpet':
        return <KarpetIcon />;
      case 'setrika saja':
        return <SetrikaIcon />;
      case 'express':
        return <ExpressIcon />;
      default:
        return <AddSaldoIcon />;
    }
  };

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.buttonWrapper}>
        <View style={styles.iconWrapper(type)}>
          <Icon />
        </View>
        <Text style={styles.buttonLabel(type)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
