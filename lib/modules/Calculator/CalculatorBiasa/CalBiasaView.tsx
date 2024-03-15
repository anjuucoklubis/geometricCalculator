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
import MyKeyboardCalBiasa from '../../../Components/MyKeyCalBiasa';
import {SafeAreaView} from 'react-native-safe-area-context';

const CalBiasaView = () => {
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
              navigation.navigate('CalculatorView');
            }}>
            <Image source={require('../../../assets/image/back.png')} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '500',
              alignSelf: 'center',
            }}>
            Calculator Biasa
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
            {/* <Switch
              value={theme === 'light'}
              onValueChange={() =>
                setTheme(theme === 'light' ? 'dark' : 'light')
              }
            /> */}
            <View
              style={{
                alignItems: 'center',
              }}></View>
            <MyKeyboardCalBiasa />
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

export default CalBiasaView;
