import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../styles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight * 0.02,
    alignItems: 'center',
  },
  description: {
    marginLeft: windowWidth * 0.02,
  },
  title: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  status: status => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color:
      status?.toLowerCase() === 'sudah selesai'
        ? Colors.TEXT_SUCCESS
        : status?.toLowerCase() === 'masih dicuci'
        ? Colors.TEXT_DANGER
        : Colors.GREY_COLOR,
  }),
});
