import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnBoardingView from '../modules/OnBoarding/OnBoardingView';
import SplashView from '../modules/Splash/SplashView';
import HomeView from '../modules/Home/HomeView';
import AboutView from '../modules/About/AboutView';
import {Text} from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import CalculatorView from '../modules/Calculator/CalculatorView';
import BangunDatarView from '../modules/BangunDatar/BangunDatarView';
import BangunRuangView from '../modules/BangunRuang/BangunRuangView';
import CalBiasaView from '../modules/Calculator/CalculatorBiasa/CalBiasaView';
import CalAkarView from '../modules/Calculator/CalculatorAkar/CalAkarView';
import CalPangkatView from '../modules/Calculator/CalculatorPangkat/CalPangkatView';
import BelahketupatView from '../modules/BangunDatar/ViewBangunDatar/BelahketupatView';
import JajargenjangView from '../modules/BangunDatar/ViewBangunDatar/JajargenjangView';
import LayanglayangView from '../modules/BangunDatar/ViewBangunDatar/LayanglayangView';
import LingkaranView from '../modules/BangunDatar/ViewBangunDatar/LingkaranView';
import PersegipanjangView from '../modules/BangunDatar/ViewBangunDatar/PersegipanjangView';
import PersegiView from '../modules/BangunDatar/ViewBangunDatar/PersegiView';
import SegitigaView from '../modules/BangunDatar/ViewBangunDatar/SegitigaView';
import TrapesiumView from '../modules/BangunDatar/ViewBangunDatar/TrapesiumView';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 75,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'codesquare' : 'codesquare'; // Ganti nama ikon sesuai kebutuhan Anda
          } else if (route.name === 'BMI') {
            iconName = focused ? 'rocket' : 'rocket'; // Ganti nama ikon sesuai kebutuhan Anda
          }

          return <AntdesignIcon name={iconName} size={size} color={color} />; // Gunakan komponen Icon dengan properti name, size, dan color
        },
        tabBarLabel: ({focused, color}) => {
          const labelStyle = {
            fontSize: focused ? 16 : 13,
            color: focused ? 'orange' : 'gray',
          };

          return <Text style={labelStyle}>{route.name}</Text>;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AboutView"
        component={AboutView}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashView"
          component={SplashView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoardingView"
          component={OnBoardingView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalculatorView"
          component={CalculatorView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BangunDatarView"
          component={BangunDatarView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BangunRuangView"
          component={BangunRuangView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalBiasaView"
          component={CalBiasaView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalPangkatView"
          component={CalPangkatView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalAkarView"
          component={CalAkarView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BelahketupatView"
          component={BelahketupatView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JajargenjangView"
          component={JajargenjangView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LayanglayangView"
          component={LayanglayangView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LingkaranView"
          component={LingkaranView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersegipanjangView"
          component={PersegipanjangView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PersegiView"
          component={PersegiView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SegitigaView"
          component={SegitigaView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TrapesiumView"
          component={TrapesiumView}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default router;
