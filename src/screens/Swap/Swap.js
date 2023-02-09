import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Wallet from '../../components/wallet/Wallet';
import styles from './Swap.styles';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Swap = () => {
  return (
    <LinearGradient
      colors={['#0e6789', '#103f55', '#0e202e']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, justifyContent: 'space-between',}}>
        <View>
          <Text style={styles.title}>Swap</Text>
          <View style={styles.walletContainer}>
            <Wallet
              label="From"
              balance="1.000"
              abbreviation="BTC"
              name="Bitcoin"
            />
            <View style={styles.separator}></View>
            <Wallet label="To" balance="0" abbreviation="USDT" name="Theter" />
          </View>
          <View style={styles.rateContainer}>
            <Text>Rate</Text>
            <Text>1 BTC = 23.559,18 USDT </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Instant Swap</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Swap;
