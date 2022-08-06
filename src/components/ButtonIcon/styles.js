import { StyleSheet } from 'react-native';
import theme from '../../styles';

export default StyleSheet.create({
  buttonLabel: type => ({
    fontFamily:
      type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    fontSize: type === 'layanan' ? 14 : 10,
    textAlign: 'center',
  }),
  iconWrapper: type => ({
    backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
    marginBottom: 5,
  }),
  container: type => ({
    marginBottom: type === 'layanan' ? 12 : 0,
    marginHorizontal: type === 'layanan' ? 0 : 5,
    marginRight: type === 'layanan' ? 30 : 0,
  }),
});
