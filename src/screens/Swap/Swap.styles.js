import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  swapContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  walletContainer: {
    margin: 15,
    borderRadius: 20,
    backgroundColor: '#073349',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,.6)'
  },
  rateContainer: {
    backgroundColor: '#c3dbfb',
    borderRadius: 10,
    margin: 15,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    backgroundColor: '#0aabda',
    padding: 15, 
    margin: 15,
    borderRadius: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }

  
})

export default styles
