import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    backgroundColor: '#2389ac',
    padding: 8,
    borderRadius: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  searchBar: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.4)',
    borderRadius: 10,
    width: 200,
  },
  searchText: {
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 5
  },
  graphicContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphic: {
    width: '100%',
    height: 140
  },
});

export default styles;
