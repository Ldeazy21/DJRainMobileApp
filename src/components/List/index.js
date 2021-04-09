import React from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
function List({title}) {
    return (
       
       <View style={styles.container}>
          
    <Text style={styles.title}>{title}</Text>   
    <MaterialCommunityIcons name="greater-than" style={styles.icon} size={15} color='white' />

       </View>
    )
}

export default List
const styles = StyleSheet.create({
container:{
   
    
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor:'transparent',
    
    paddingTop:20,

    marginTop:10
    
},
title:{
    color:'white',
    fontSize:22,
    fontWeight:'200'
},
icon:{

},
image:{
    width: 100,
    height:100
}
})