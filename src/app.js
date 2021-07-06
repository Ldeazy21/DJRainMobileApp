import React from 'react';

import MainStack from './setup/navigation';
import {AuthContextProvider} from '../src/auth/Context/AuthContext';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: '#ecf0f1'}}>

      <StatusBar style={{
        backgroundColor:'red'
      }}  barStyle="default" backgroundColor="grey"   />
    <AuthContextProvider>

      <MainStack/>
   </AuthContextProvider>
    </SafeAreaView>
  );
}