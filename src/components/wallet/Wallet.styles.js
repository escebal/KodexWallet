import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  walletContainer: {
    flexDirection: 'column',
    padding:15,
  },
  sectionAmountContainer: {
    flexDirection: 'column',
    marginBottom: 12 
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceText: {
    color: '#fff',
    fontSize: 16,
  },
  sectionCoinContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '55%',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinImage: {
    height: 38,
    width: 38,
  },
  coinValueContainer: {
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 15,
  },
  abbText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#21495a',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
  },
  nextButtonText: {
    color: '#fff',
  },
});

export default styles;
