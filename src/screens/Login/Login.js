import React, {useReducer, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {initialState, reducer} from '../../actions';
import {SET_TOKEN} from '../../actions/types';
import Input from '../../components/input/Input';
import styles from './Login.styles';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('ingsalgado15@gmail.com');
  const [password, setPassword] = useState('Admin123');
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = () => {
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Accept-Language', 'En');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      `https://prime.apimastercode.com/app/v1/auth/signin?email=${email}&password=${password}`,
      requestOptions,
    )
      .then(async response => {
        if (response.status === '200') {
          const result = await response.json();
          console.log({result});
          dispatch({type: SET_TOKEN, payload: result});
        } else {
          const error = await response.text();
          console.log({error});
          navigation.navigate('Tabs');
        }
      })
      .catch(error => console.log('error', error));
  };

  console.log('state', state);

  return (
    <LinearGradient
      colors={['#0e566f', '#103446', '#0f212f']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.loginContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.logo}></View>
            <View style={styles.logoNameContainer}>
              <Text style={styles.headerText}>Kodex</Text>
              <Text style={styles.subHeaderText}>Wallet</Text>
            </View>
          </View>
          <View>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeTitleText}>Bienvenidos</Text>
              <Text style={styles.welcomeMessageText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Input
                label="Email"
                placeholder="example@gmail.com"
                value={email}
                setValue={setEmail}
              />
              <Input
                label="Confirm Password"
                placeholder="Password"
                value={password}
                setValue={setPassword}
              />
            </View>
            <View style={styles.passInfoContainer}>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox} />
                <Text style={styles.rememberMeText}>Recuerdame</Text>
              </View>
              <Text style={styles.forgotPassText}>Olvide mi contrasena</Text>
            </View>
            <TouchableOpacity onPress={onSubmit} style={styles.loginButton}>
              <Text style={styles.loginTextBtn}>Iniciar sesion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
