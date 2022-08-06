import { Dimensions, StyleSheet } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  header: {
    height: windowHeight * 0.3,
    width: windowWidth,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  logo: {
    height: windowHeight * 0.06,
    width: windowWidth * 0.3,
  },
  page: {
    flex: 1,
  },
  welcomeHeader: {
    marginTop: windowHeight * 0.025,
  },
  welcomeGreeting: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular',
  },
  welcomeUsername: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold',
  },
  layanan: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayananWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
  },
});
