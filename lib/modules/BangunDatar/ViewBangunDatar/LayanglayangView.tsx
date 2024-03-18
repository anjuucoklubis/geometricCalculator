import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../../Context/ThemeContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyKeyboardCalPangkat from '../../../Components/MyKeyCalPangkat';

const LayanglayangView = () => {
  const navigation = useNavigation<any>();
  const [theme, setTheme] = useState('light');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/image/background/Calculator.png')}
        resizeMode="cover"
        style={styles.image}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BangunDatarView');
            }}>
            <Image source={require('../../../assets/image/back.png')} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '500',
              alignSelf: 'center',
            }}>
            Layang-layang{' '}
          </Text>
        </View>
        <ThemeContext.Provider value={theme}>
          <SafeAreaView
            style={
              theme === 'light'
                ? styles.containerListmenu
                : [styles.containerListmenu, {backgroundColor: '#EDEEF3'}]
            }>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
              }}>
              Silahkan masukan angka dan berhitung !
            </Text>
            <View
              style={{
                alignItems: 'center',
              }}></View>
            {/* <MyKeyboardCalPangkat /> */}
          </SafeAreaView>
        </ThemeContext.Provider>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  containerListmenu: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
});

export default LayanglayangView;
