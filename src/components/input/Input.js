import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './Input.styles';

// create a component
const Input = ({label, password, placeholder, value, setValue}) => {
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          value={value}
          onChangeText={setValue}
          secureTextEntry={hidePassword}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,.7)"
          style={styles.textInput}
        />
        {password && (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Text style={styles.showPasswordText}>
              {hidePassword ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

//make this component available to the app
export default Input;
