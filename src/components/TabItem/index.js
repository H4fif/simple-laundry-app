import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  AccountActive,
  AccountInactive,
  HomeActive,
  HomeInactive,
  OrderActive,
  OrderInactive,
} from '../../assets/icons';

import styles from './styles';

const TabItem = ({ isFocused, key, onLongPress, onPress, label }) => {
  const Icon = () => {
    if (label === 'Akun')
      return isFocused ? <AccountActive /> : <AccountInactive />;

    if (label === 'Home') return isFocused ? <HomeActive /> : <HomeInactive />;

    if (label === 'Pesanan')
      return isFocused ? <OrderActive /> : <OrderInactive />;

    return <HomeInactive />;
  };

  return (
    <TouchableOpacity
      key={`navigator-${key}`}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
