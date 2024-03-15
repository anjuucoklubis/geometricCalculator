import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const OnBoardingView = () => {
  const navigation = useNavigation<any>();
  const handletoHome = () => {
    navigation.navigate('MainApp');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/background/SplashScreen.png')}
        resizeMode="cover"
        style={styles.imagebackground}>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Geo Cal</Text>
          <Image
            source={require('../../assets/image/022.png')}
            style={styles.image}
          />
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            architecto.
          </Text>
          <TouchableOpacity onPress={handletoHome}>
            <View
              style={{
                backgroundColor: '#CACACA',
                borderRadius: 15,
                width: 150,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 35,
                }}>
                Lanjut
              </Text>
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
  imagebackground: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  description: {
    fontSize: 20,
  },
});

export default OnBoardingView;
