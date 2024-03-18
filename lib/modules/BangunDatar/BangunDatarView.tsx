import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BangunDatarViewModel from './BangunDatarViewModel';

const BangunDatarView = () => {
  const navigation = useNavigation<any>();
  const {data} = BangunDatarViewModel();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/image/background/Calculator.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.containerAppBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MainApp');
            }}>
            <Image source={require('../../assets/image/back.png')} />
          </TouchableOpacity>
          <Text style={styles.containerAppBarTextSide}>Bangun Datar</Text>
        </View>
        <View style={styles.containerListMenu}>
          <Text style={styles.containerListMenuText}>List Menu</Text>
          <View style={styles.containerListMenuTwo}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate(item.route);
                  }}
                  style={{marginBottom: 10}}>
                  <View style={styles.containerItemFirts}>
                    <View style={styles.containerSubItem}>
                      <Image
                        source={require('../../assets/image/listmenu/kalbiasa.png')}
                      />
                      <Text style={styles.containerSubItemText}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: 20,
                      }}>
                      <Text>Buka</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  containerAppBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  containerAppBarTextSide: {
    fontSize: 25,
    fontWeight: '500',
    alignSelf: 'center',
  },
  containerListMenu: {
    backgroundColor: '#EDEEF3',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  containerListMenuText: {
    fontSize: 20,
    fontWeight: '400',
  },
  containerListMenuTwo: {
    marginTop: 20,
  },
  containerItemFirts: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    justifyContent: 'space-between',
    borderRadius: 15,
    height: 65,
  },
  containerItemMore: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    justifyContent: 'space-between',
    marginTop: 10,
    borderRadius: 15,
    height: 65,
  },
  containerSubItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  containerSubItemText: {
    fontSize: 18,
    marginLeft: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default BangunDatarView;
