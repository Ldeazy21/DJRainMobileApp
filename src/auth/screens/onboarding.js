import React,{useLayoutEffect} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Accessibility from '../../img/accessibility.svg';
// import Headphone from '../../img/donnie.svg';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Onboarding({ navigation }) {
  useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
  },[])
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
          
          <View style={{width: 100, height: 100}}>
           
            <MaterialCommunityIcons  name='headset' size={100} color='#003e95'/>
          </View>
          
          
          <View style={styles.btnSection}>
            <Button mode="contained" color='#003E95' style={styles.button} onPress={() => {navigation.navigate('CreateAccount')}}>
              Create An Account
            </Button>
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row', marginTop:5}}>
              <Text>Already have account? </Text>
              <Text style={{color:'white'}} onPress={()=>navigation.navigate('SignIn')} >Sign</Text>
            </View>
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
    resizeMode: "cover"
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%'
  },
  btnSection:{
    marginTop:50
  },
  button: {
    // padding: 10,
    justifyContent:'center',
    width:325,
    height:50,
    color: '#003E95'
  },
 
  
})