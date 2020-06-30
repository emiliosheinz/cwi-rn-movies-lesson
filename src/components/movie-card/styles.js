import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 5,
    maxWidth: 135,
  },
  bottomContainer: {
    padding: 10,
    alignItems: 'center',
  },
  imageContainer: {
    width: 135,
    height: 180,
  },
  title: {
    fontSize: 14,
    color: '#000',
  },
  subTitle: {
    fontSize: 12,
    color: '#9B9B9B',
  },
  image: {
    flex: 1,
  },
  touchableStart: {
    position: 'absolute',
    right: 0,
    padding: 5,
  },
});
