import { StatusBar } from 'expo-status-bar';
import styles from './App.style';
import { React, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhoneInput from "react-native-phone-input";
import { Form, FormItem } from 'react-native-form-component';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { generateRandomString } from './helpers';

export default function App() {

  const [phoneNumber, setPhoneNumber] = useState("");

  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.formContainer}>

        <Text style={styles.title}>
          Sign up
        </Text>

        <Form 
          onButtonPress={() => {
            console.log(generateRandomString())
          }}
          buttonStyle={styles.submitBtn}
          buttonText="Verify"  
        >
          <View style={styles.labelContainer}>
            <Text style={styles.label}>
              Phone number
            </Text>
          </View>

          <PhoneInput
            style={styles.phoneInput}
            value={phoneNumber}
            initialCountry="us"
            onChangePhoneNumber={(text) => {
              setPhoneNumber(text);
            }}
            withShadow
            autoFocus
           />

          <View style={styles.labelContainer}>
            <Text style={styles.label}>
              Verify number
            </Text>
          </View>

          <View style={styles.verifyContainer}>
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>

        </Form>

      </View>
    
  );
}

