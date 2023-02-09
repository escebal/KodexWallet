import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    backgroundColor: '#fff',
    height: 70,
    width: 70,
  },
  logoNameContainer: {
    alignItems: 'flex-end',
  },
  headerText: {
    color: '#fff',
    fontSize: 50,
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  welcomeTitleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcomeMessageText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    margin: 12,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.5)',
    paddingLeft: 15,
    borderRadius: 25,
    color: 'rgba(255,255,255,.5)',
  },
  inputContainer: {
    margin: 12,
  },
  passInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginBottom: 50,
  },
  rememberMeText: {
    color: '#fff',
    paddingLeft: 10,
  },
  forgotPassText: {
    color: '#0aa6d3',
  },
  loginButton: {
    backgroundColor: '#0aa6d3',
    margin: 12,
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  loginTextBtn: {
    color: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#0aa6d3'
  },
});

export default styles;
