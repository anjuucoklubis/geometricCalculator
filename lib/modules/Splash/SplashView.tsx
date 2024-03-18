import React, {useEffect} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootParamList} from './InterfaceSplash';

type SplashViewProps = {
  navigation: NavigationProp<RootParamList>;
};

const SplashView: React.FC<SplashViewProps> = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'OnBoardingView'}],
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/background/SplashScreen.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Geo Cal</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default SplashView;
