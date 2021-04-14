import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default class App extends React.Component {
  render(){
    return (
      <SafeAreaProvider>
        <Home/>   
      </SafeAreaProvider>
    );
  }
}