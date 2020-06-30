import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFFF',
  },
  image: {
    width,
    height: 280,
  },
  infosContainer: {
    marginLeft: 12,
    marginTop: 10,
  },
  genreContainer: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  genreContainerGradient: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  dateTime: {
    flexDirection: 'row',
    marginTop: 5,
  },
  genre: {
    color: '#4A4A4A',
    fontSize: 18,
  },
  infos: {
    color: '#4A4A4A',
    fontSize: 13,
  },
  duration: {
    marginLeft: 24,
  },
  synopsisContainer: {
    marginTop: 21,
    marginLeft: 11,
    marginBottom: 10,
  },
  synopsisTitle: {
    color: '#4A4A4A',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 7,
  },
  synopsisDescription: {
    fontSize: 14,
    color: '#4A4A4A',
  },
});
