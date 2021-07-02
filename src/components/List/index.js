import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Touchable } from 'react-native';
import {View,StyleSheet,Text} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function List({item,navigation}) {
    return (
    <View style={styles.container}> 
    <TouchableOpacity onPress={()=>{
        navigation.navigate(item.name)
    }}>

        <Text style={styles.title}>{item.title}</Text> 
        </TouchableOpacity>  
        {/* <MaterialCommunityIcons name="greater-than" style={styles.icon} size={15} color='white' /> */}
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
    marginTop:10,
    top: 40,
    paddingLeft:10
},
title:{
    color:'white',
    fontSize:20,
    fontWeight:'500'
},
icon:{

},
image:{
    width: 100,
    height:100,
    paddingLeft:10
}
})