import { StyleSheet } from 'react-native';
import theme from '../../styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? theme.MAIN_COLOR_ACTIVE : theme.MAIN_COLOR_INACTIVE,
    marginTop: 8,
  }),
});
