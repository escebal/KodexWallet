import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './HomeHeader.styles';
// create a component
const HomeHeader = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.button}>
          <Image
            source={require('../../../assets/icons/ethereum.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search</Text>
        </View>
        <View style={styles.button}>
          <Image
            source={require('../../../assets/icons/ethereum.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View>
        <Text style={styles.title} >Balance en Bitcon</Text>
      </View>
      <View style={styles.graphicContainer}>
          <Image
            source={require('../../../assets/img/graphic.png')}
            style={styles.graphic}
          />
        </View>
    </>
  );
};

export default HomeHeader;
