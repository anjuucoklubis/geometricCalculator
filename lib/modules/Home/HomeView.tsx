import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeView = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/background/SplashScreen.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.containerItem}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CalculatorView');
            }}>
            <View style={styles.containerItemOne}>
              <Text style={styles.containerItemText}>Kalkulator</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BangunDatarView');
            }}>
            <View style={styles.containerItemMore}>
              <Text style={styles.containerItemText}>Bangun Datar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BangunRuangView');
            }}>
            <View style={styles.containerItemMore}>
              <Text style={styles.containerItemText}>Bangun Ruang</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    alignSelf: 'center',
  },
  containerItemOne: {
    backgroundColor: '#CACACA',
    borderRadius: 8,
    width: 244,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerItemMore: {
    backgroundColor: '#CACACA',
    borderRadius: 8,
    width: 244,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  containerItemText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeView;
