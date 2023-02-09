import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Caurosel.styles';

// create a component
const CarouselItem = ({index, currentIndex}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: index === currentIndex ? '#0aabdb' : '#0f212f',
      }}>
      <Image
        source={require('../../../assets/icons/bitcoin.png')}
        style={{width: 30, height: 30}}
      />
    </View>
  );
};

export default CarouselItem;
