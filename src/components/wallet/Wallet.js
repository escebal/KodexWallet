import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Input from '../input/Input';
import styles from './Wallet.styles';

// create a component
const Wallet = ({label, balance, amount, abbreviation, name}) => {
  return (
    <View style={styles.walletContainer}>
      <View style={styles.sectionAmountContainer}>
        <Text style={styles.titleText}>{label}</Text>
        <Text style={styles.balanceText}>Balance: ${balance}</Text>
      </View>
      <View style={styles.sectionCoinContainer}>
        <View style={styles.inputContainer}>
          <Input label="Amount" placeholder="$0.0" style={styles.input} />
        </View>
        <View style={styles.infoContainer}>
          <Image
            source={require('../../../assets/icons/bitcoinColor.png')}
            style={styles.coinImage}
          />
          <View style={styles.coinValueContainer}>
            <Text style={styles.abbText}>{abbreviation}</Text>
            <Text style={styles.nameText}>{name}</Text>
          </View>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}> > </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Wallet;
