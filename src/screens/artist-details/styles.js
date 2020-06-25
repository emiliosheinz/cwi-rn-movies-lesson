import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 355,
    width,
  },
  name: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  extraInfo: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 15,
  },
});
