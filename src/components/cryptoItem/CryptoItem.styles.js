import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    backColorContainer: {
        backgroundColor: '#f7941a',
        marginLeft: 12,
        marginVertical: 5,
        borderRadius: 25
    },
  cryptoItemContainer: {
    backgroundColor: '#0f212f',
    marginLeft: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25
  },
  infoContainer: {
    flexDirection: 'row',
  
  },
  imageContainer: {
    width: 70,
    borderBottomLeftRadius:25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c1b28',
  },
  prevContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    padding: 12
  },
  valueContainer: {
    flexDirection: 'row',
   
  },
  aftContainer: {
    flexDirection: 'column',
    paddingVertical: 12,
    paddingRight: 18
  },
  titleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  amountText: {
    color: '#fff',
  },
  percentageText: {
    color: '#e6496f',
    fontWeight: 'bold',
    marginLeft: 5
  },
});

export default styles;
