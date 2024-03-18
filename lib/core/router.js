import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnBoardingView from '../modules/OnBoarding/OnBoardingView';
import SplashView from '../modules/Splash/SplashView';
import HomeView from '../modules/Home/HomeView';
import AboutView from '../modules/About/AboutView';
import {Text} from 'react-native';
import {Svg, Path} from 'react-native-svg';
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
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
              <Path
                d="M9 21V13.6C9 13.0399 9 12.7599 9.109 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75993 12 10.04 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M2 9.5L11.04 2.72C11.3843 2.46181 11.5564 2.33271 11.7454 2.28294C11.9123 2.23902 12.0877 2.23902 12.2546 2.28295C12.4436 2.33271 12.6157 2.46181 12.96 2.72L22 9.5M4 8V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40974 20.2843 4.7157 20.5903 5.09202 20.782C5.51985 21 6.0799 21 7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V8L13.92 3.44C13.2315 2.92361 12.8872 2.66542 12.5091 2.56589C12.1754 2.47804 11.8246 2.47804 11.4909 2.56589C11.1128 2.66542 10.7685 2.92361 10.08 3.44L4 8Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          );
        },

        tabBarLabel: ({focused, color}) => {
          const labelStyle = {
            fontSize: focused ? 16 : 13,
            color: focused ? 'blue' : 'gray',
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
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
              <Path
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          ),
        }}
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
