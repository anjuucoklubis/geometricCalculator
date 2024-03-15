import * as React from 'react';
import Button from './Button';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import {Styles} from '../assets/style/GlobalStyles';
import {myColors} from '../assets/style/Color';

export default function MyKeyboardCalAkar() {
    const [inputNumber, setInputNumber] = React.useState('');
    const [result, setResult] = React.useState<number | null>(null);
  
    const handleNumberPress = (buttonValue: string) => {
      if (result !== null) {
        setInputNumber(buttonValue);
        setResult(null);
      } else {
        setInputNumber(inputNumber + buttonValue);
      }
    };
  
    const clear = () => {
      setInputNumber('');
      setResult(null);
    };
  
    const calculateSquare = () => {
      const number = parseFloat(inputNumber);
      const square = number * number;
      setResult(square);
    };
  
    const calculateSquareRoot = () => {
      const number = parseFloat(inputNumber);
      if (!isNaN(number)) {
        const squareRoot = Math.sqrt(number);
        setResult(squareRoot);
      }
    };
  
    return (
      <View style={Styles.viewButton}>
        <View
          style={{
            height: 120,
            width: '90%',
            justifyContent: 'flex-end',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          <Text style={{ fontSize: 35, color: myColors.gray, fontWeight: '200' }}>
            Hitung Akar {inputNumber}
          </Text>
          {result !== null ? (
            <Text style={{ fontSize: 35, color: myColors.gray, fontWeight: '200' }}>
              adalah <Text style={{ color: myColors.result }}>{result}</Text>
            </Text>
          ) : (
            <Text>{''}</Text>
          )}
        </View>
        <TouchableOpacity onPress={calculateSquareRoot}>
          <View
            style={{
              maxWidth: '100%',
              flexDirection: 'row',
              backgroundColor: myColors.blue,
              borderRadius: 20,
              height: 70,
              width: 200,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 35,
                color: myColors.black,
                fontWeight: '200',
                alignSelf: 'center',
              }}>
              Hitung Akar
            </Text>
          </View>
        </TouchableOpacity>
  
        <View style={Styles.row}>
          <Button title="7" isGray onPress={() => handleNumberPress('7')} />
          <Button title="8" isGray onPress={() => handleNumberPress('8')} />
          <Button title="9" isGray onPress={() => handleNumberPress('9')} />
        </View>
        <View style={Styles.row}>
          <Button title="4" isGray onPress={() => handleNumberPress('4')} />
          <Button title="5" isGray onPress={() => handleNumberPress('5')} />
          <Button title="6" isGray onPress={() => handleNumberPress('6')} />
        </View>
        <View style={Styles.row}>
          <Button title="1" isGray onPress={() => handleNumberPress('1')} />
          <Button title="2" isGray onPress={() => handleNumberPress('2')} />
          <Button title="3" isGray onPress={() => handleNumberPress('3')} />
        </View>
        <View style={Styles.row}>
          <Button title="." isGray onPress={() => handleNumberPress('.')} />
          <Button title="0" isGray onPress={() => handleNumberPress('0')} />
          <Button title="Del" isGray onPress={clear} />
        </View>
      </View>
    );
  }
  
