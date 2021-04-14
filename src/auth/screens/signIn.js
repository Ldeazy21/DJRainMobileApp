import React,{useLayoutEffect,useState} from 'react';
import { View, StyleSheet, TouchableOpacity, Text,TextInput,Image } from 'react-native';
import {  Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from "react-native-vector-icons/AntDesign";

// import Headphone from '../../img/donnie.svg';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SignIn({ navigation }) {
  useLayoutEffect(()=>{
      navigation.setOptions({ 
        title:'Sign In',
        headerShown:true,
      })
  },[])
  const [showPassword,setShowPassword]=useState(true)
  return (
      <LinearGradient
          colors={['#ffffff', '#003e95']}
          style={styles.linearGradient}
          start={{ x: 1, y: .35 }}
          end={{ x: 1, y: 1 }}
        >
    <View style={styles.container}>
       
       
       <View>

     
    <View style={{alignItems:'center'}}>
            <Image
            style={styles.logo}
            source={require("../../img/logo.png")}
            />
            
            
          {/* <img src={logo} width="100" height="50" /> */}
          </View>
        <View style={styles.input_group}>
          <Text style={styles.label}>Email address</Text>
          <TextInput 
          style={styles.input}
          placeholder="namesurname@gmail.com"
          placeholderTextColor="white"
          
          />
        </View>
       
      
        <View style={styles.input_group}>
          <Text style={styles.label}>Password</Text>
          <View style={{
            flexDirection:'row'
          }}>

          <TextInput 
          secureTextEntry={showPassword}
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="white"
          
          
          />
          {/* <TouchableOpacity> */}

              <MaterialCommunityIcons 
              style={styles.passwordIcon}
              name={!showPassword ?'eye-outline':'eye-off-outline'}
                size={25} color='white'
              onPress={()=>setShowPassword(!showPassword)}
              />
          {/* </TouchableOpacity> */}
          </View>
        </View>
           
        <View style={styles.input_group}>
         
         
        <Button mode="contained" color='#003E95' style={styles.button} onPress={() => {navigation.navigate('SignIn')}}>
              SIGN IN
            </Button>
           <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row', marginTop:5}}>
           <Text style={{color:'white'}}>Forgot password</Text>
           </View>
        </View>
      
        </View>

        <View style={styles.btnSection}>
       
       
       
       
       
      
          
          
          
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row', marginTop:5}}>
              <Text>Don`t have account? </Text>
              <Text style={{color:'white'}} onPress={()=>navigation.navigate('CreateAccount')} >Create Account</Text>
            </View>
            </View>
    </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingRight:25,
    paddingLeft:25,
   flex:1,
   justifyContent: 'space-evenly',
    
    height: '100%',
 
    
  },
  input_group:{
    marginTop:25
  },
  label: {
    color:'#003E95',
    paddingBottom:7,
    fontWeight:'600'
  },
  input: {
    paddingTop:16,
    paddingBottom:16,
    paddingLeft:20,
    paddingRight:20,
    borderWidth:1,
    height:50,
    
    backgroundColor:'#001B40',
    color:'white',
  borderRadius:5
  },
  passwordInput: {
    paddingTop:16,
    paddingBottom:16,
    paddingLeft:20,
    paddingRight:20,
    borderWidth:1,
    height:50,
    width:343,
    
    backgroundColor:'#001B40',
    color:'white',
  borderRadius:5
  },
  passwordIcon:{
    marginTop:13,
    position: "absolute",
    marginLeft:300,
   

  },
  social_btns: {
    marginTop:50,
    height:50
  },
  btn: {
    marginTop:16,
    justifyContent: 'center',
    height:50,
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
    marginBottom:10,
    justifyContent:'center',
    width:'100%',
    height:50,
    color: '#003E95'
  },
  social_btn:{
    marginTop:10,
  },
  logo: {
    width: 160,
    height: 95, 
    marginBottom: 30
  },

  
 
  
})