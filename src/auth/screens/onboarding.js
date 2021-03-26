import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Button icon="camera" mode="contained" onPress={() => {navigation.navigate('CreateAccount')}}>
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})