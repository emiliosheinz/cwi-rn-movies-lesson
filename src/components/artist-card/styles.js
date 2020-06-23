import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 115,
  },
  image: {
    flex: 1,
  },
  bottomTextContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 45,
    justifyContent: 'center',
  },
  bottomText: {
    textAlign: 'center',
    fontSize: 14,
  },
  empty: {
    backgroundColor: 'transparent',
  },
});
