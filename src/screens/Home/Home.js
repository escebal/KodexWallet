import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CryptoItem from '../../components/cryptoItem/CryptoItem';
import styles from './Home.styles';
import Carousel from 'react-native-reanimated-carousel';
import {coins} from '../../shared/data';
import {SafeAreaView} from 'react-native-safe-area-context';
import CarouselItem from '../../components/carouselItem/CarouselItem';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HomeHeader from '../../components/homeHeader/HomeHeader';
import LinearGradient from 'react-native-linear-gradient';

const PAGE_WIDTH = 100;
const PAGE_HEIGHT = 60;

const Home = () => {
  const r = useRef(null);
  const width = Dimensions.get('window').width;
  const [loop, setLoop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <LinearGradient
      colors={['#0f5c7b', '#010816', '#010814']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <HomeHeader />
        <View style={styles.carouselContainer}>
          <Carousel
            key={`${loop}`}
            ref={r}
            loop
            //width={width}

            style={{
              width: width,
              height: PAGE_HEIGHT,
              justifyContent: 'center',
              backgroundColor: '#0f212f',
            }}
            width={PAGE_WIDTH}
            height={PAGE_HEIGHT}
            data={[{}, {}, {}, {}, {}]}
            scrollAnimationDuration={1000}
            onSnapToItem={index => setCurrentIndex(index)}
            renderItem={({item, index, animationValue}) => {
              return <CarouselItem index={index} currentIndex={currentIndex} />;
            }}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.borderSection}>
            <Text style={styles.sectionText}>Cryptomonedas</Text>
          </View>
          <View style={styles.borderSectionSecond}>
            <Text style={styles.sectionText}>Colecciones</Text>
          </View>
        </View>
        <View>
          <FlatList
            data={coins}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CryptoItem item={item} />}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

