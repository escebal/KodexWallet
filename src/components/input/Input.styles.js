import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    justifyContent: 'space-around',
    marginBottom: 12
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontWeight: '600'
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    color: "rgba(255,255,255,.7)",
    height: 30,
    fontSize: 16
  },
  showPasswordText: {
    color: "#fff"
  }
});

export default styles;
