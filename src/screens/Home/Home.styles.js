import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  carouselContainer: {
    backgroundColor: '#0f212f',
    height: 80,
    borderRadius: 20
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },

  sectionText: {
    color: '#fff',
    fontSize: 18,
  },
  borderSection: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#0b92ad',
  },
  borderSectionSecond: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#212732',
  },
});

export default styles;
