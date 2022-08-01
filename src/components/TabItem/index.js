import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  AccountActiveIcon,
  AccountInactiveIcon,
  HomeActiveIcon,
  HomeInactiveIcon,
  OrderActiveIcon,
  OrderInactiveIcon,
} from '../../assets/icons';

import styles from './styles';

const TabItem = ({ isFocused, index, onLongPress, onPress, label }) => {
  const Icon = () => {
    if (label === 'Akun')
      return isFocused ? <AccountActiveIcon /> : <AccountInactiveIcon />;

    if (label === 'Home')
      return isFocused ? <HomeActiveIcon /> : <HomeInactiveIcon />;

    if (label === 'Pesanan')
      return isFocused ? <OrderActiveIcon /> : <OrderInactiveIcon />;

    return <HomeInactiveIcon />;
  };

  return (
    <TouchableOpacity
      key={`navigator-${index}`}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;
