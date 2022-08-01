import { StyleSheet } from 'react-native';
import theme from '../../styles';

export default StyleSheet.create({
  buttonLabel: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 10,
    textAlign: 'center',
  },
  iconWrapper: {
    backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    padding: 7,
    borderRadius: 10,
    marginBottom: 5,
  },
  container: {
    marginHorizontal: 5,
  },
});
