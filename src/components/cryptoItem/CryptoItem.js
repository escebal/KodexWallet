import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './CryptoItem.styles';

// create a component
const CryptoItem = ({item}) => {
  const {image, name, price, percentage, value, finalPrice} = item;
  return (
    <View style={styles.backColorContainer}>
      <View style={styles.cryptoItemContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.imageContainer}>
            <Image style={{width: 30, height: 30}} source={image} />
          </View>
          <View style={styles.prevContainer}>
            <Text style={styles.titleText}>{name}</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.amountText}>{price}</Text>
              <Text style={styles.percentageText}>{percentage}</Text>
            </View>
          </View>
        </View>
        <View style={styles.aftContainer}>
          <Text style={styles.titleText}>{value}</Text>
          <Text style={styles.amountText}>{finalPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default CryptoItem;
