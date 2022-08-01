import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../styles';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 17,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginTop: -windowHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labels: {
    width: '60%',
  },
  actionButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  labelSaldoHeader: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 20,
  },
  labelSaldoValue: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
  },
  labelPointHeader: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 12,
  },
  labelPointValue: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 12,
    color: theme.MAIN_COLOR_ACTIVE,
  },
});
