import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Headphone from '../../img/headphone-symbol.svg';


export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['#ffffff', '#003e95']}
          style={styles.linearGradient}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View>
            <Image
            style={styles.logo}
            source={require("../../img/logo.png")}
            />
            
            
          {/* <img src={logo} width="100" height="50" /> */}
          </View>
          <View>
            <Text style={styles.title}>
              Start Streaming your favorite mixes from DJ Rain
            </Text>
          </View>
          <View>
          <Headphone width={100} height={100} />
          </View>
          <View>
            <Button mode="contained" color='#003E95' style={styles.button} onPress={() => {navigation.navigate('CreateAccount')}}>
              Create An Account
            </Button>
          </View>
      </LinearGradient>
    </View>


    
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: "column",
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    //flex: 1,
    fontFamily: 'Avenir',
    fontSize: 24,
    textAlign:'center',
    fontWeight: '500',
    padding: 10,
    marginBottom: 100
  },
  logo: {
    width: 250,
    height: 150, 
    marginBottom: 30
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  button: {
    padding: 10,
    color: '#003E95',
     },
})