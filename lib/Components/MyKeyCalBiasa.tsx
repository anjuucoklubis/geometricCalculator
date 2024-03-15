import * as React from 'react';
import Button from './Button';
import {View, Text} from 'react-native';
import {Styles} from '../assets/style/GlobalStyles';
import {myColors} from '../assets/style/Color';

export default function MyKeyboardCalBiasa() {
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState<Number | null>(null);
  const [isOperationDone, setIsOperationDone] = React.useState(false);
  const [operationHistory, setOperationHistory] = React.useState('');

  const handleNumberPress = (buttonValue: string) => {
    if (isOperationDone) {
      setFirstNumber(buttonValue);
      setIsOperationDone(false);
    } else {
      if (firstNumber.length < 10) {
        setFirstNumber(firstNumber + buttonValue);
      }
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    if (isOperationDone) {
      setSecondNumber(firstNumber);
      setOperationHistory(`${operationHistory} ${firstNumber} ${buttonValue}`);
      setFirstNumber('');
      setIsOperationDone(false);
    } else {
      setOperation(buttonValue);
      setSecondNumber(firstNumber);
      setOperationHistory(`${firstNumber} ${buttonValue}`);
      setFirstNumber('');
    }
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
    setOperationHistory('')
  };

  const getResult = () => {
    let currentResult = 0;
    switch (operation) {
      case '+':
        currentResult = parseInt(secondNumber) + parseInt(firstNumber);
        break;
      case '-':
        currentResult = parseInt(secondNumber) - parseInt(firstNumber);
        break;
      case '*':
        currentResult = parseInt(secondNumber) * parseInt(firstNumber);
        break;
      case '/':
        currentResult = parseInt(secondNumber) / parseInt(firstNumber);
        break;
      default:
        currentResult = 0;
        break;
    }
    setResult(currentResult);
    setFirstNumber(currentResult.toString());
    setOperationHistory(`${operationHistory} = ${currentResult}`);
    setIsOperationDone(true);
  };

  const firstNumberDisplay = () => {
    if (result === 0) {
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>;
    }
    if (result !== null) {
      return (
        <Text
          style={
            Number(result) < 99999
              ? [Styles.screenFirstNumber, {color: myColors.result}]
              : [
                  Styles.screenFirstNumber,
                  {fontSize: 50, color: myColors.result},
                ]
          }>
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === '') {
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, {fontSize: 70}]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, {fontSize: 50}]}>
          {firstNumber}
        </Text>
      );
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
        }}>
            
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{color: 'purple', fontSize: 50, fontWeight: '500'}}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button
          title="+/-"
          isGray
          onPress={() => handleOperationPress('+/-')}
        />
        <Button title="%" isGray onPress={() => handleOperationPress('%')} />
        <Button title="/" isGray onPress={() => handleOperationPress('/')} />
      </View>
      <View style={Styles.row}>
        <Button title="7" isGray onPress={() => handleNumberPress('7')} />
        <Button title="8" isGray onPress={() => handleNumberPress('8')} />
        <Button title="9" isGray onPress={() => handleNumberPress('9')} />
        <Button title="x" isGray onPress={() => handleOperationPress('*')} />
      </View>
      <View style={Styles.row}>
        <Button title="4" isGray onPress={() => handleNumberPress('4')} />
        <Button title="5" isGray onPress={() => handleNumberPress('5')} />
        <Button title="6" isGray onPress={() => handleNumberPress('6')} />
        <Button title="-" isGray onPress={() => handleOperationPress('-')} />
      </View>
      <View style={Styles.row}>
        <Button title="1" isGray onPress={() => handleNumberPress('1')} />
        <Button title="2" isGray onPress={() => handleNumberPress('2')} />
        <Button title="3" isGray onPress={() => handleNumberPress('3')} />
        <Button title="+" isGray onPress={() => handleOperationPress('+')} />
      </View>
      <View style={Styles.row}>
        <Button title="." isGray onPress={() => handleNumberPress('.')} />
        <Button title="0" isGray onPress={() => handleNumberPress('0')} />
        <Button
          title="Del"
          isGray
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isGray onPress={getResult} />
      </View>
    </View>
  );
}
