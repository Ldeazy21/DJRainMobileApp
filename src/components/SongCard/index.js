import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
function SongCard({song}) {
    return (
     
        <View >
            <TouchableOpacity style={styles.container}>

        <View style={{flexDirection:'row',alignItems:'center'}} >
<Avatar 
rounded
source={{uri: song.image}}
// source={require('../../img/aboutheader.png')}
size={58}
/>


        <View style={styles.listContent}>
        <Text style={{fontSize:13, fontWeight:'700',color:'white',width:172}}>{song.name}</Text>
        <Text style={{fontSize:13, fontWeight:'500',color:'lightgrey',width:172}}>{song.artist}</Text>

        </View>
        </View>

        <View>
        <TouchableOpacity>

        <MaterialCommunityIcons  name='play-circle' size={40} color='#003e95'/>
        </TouchableOpacity>
        </View>

</TouchableOpacity>
        </View>
    )
}

export default SongCard

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:20,
        
    },
    listContent: {
        marginLeft:10,
        
    }
})