import React, { useContext } from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { AuthContext } from '../../auth/Context/AuthContext';
import Event from '../../auth/screens/event'
function EventsList({event,navigation}) {
    const {toggleEvent, eventModal} = useContext(AuthContext)
    return (
     
        <View >
            <TouchableOpacity style={styles.container} onPress={()=>{
                // navigation.navigate('Event',{event})
                toggleEvent(event)
            }}>

        <View style={{flexDirection:'row',alignItems:'center'}} >

<View style={{width:44}}>
    <Text style={{color:'white'}}>
        {event.date}
    </Text>
    
</View>


        <View style={styles.listContent}>
        <Text style={{fontSize:14, fontWeight:'700',color:'white',width:172}}>{event.eventType}</Text>
        <Text style={{fontSize:14, fontWeight:'500',color:'lightgrey',width:172}}>{event.location}</Text>
        <Text style={{fontSize:14, fontWeight:'500',color:'lightgrey',width:172}}>{event.time}</Text>

        </View>
        </View>

        <View>
        <TouchableOpacity>

        <MaterialIcons name='keyboard-arrow-right' size={20} color='#fff'/>
        </TouchableOpacity>
        </View>

</TouchableOpacity>

        </View>
    )
}

export default EventsList

const styles = StyleSheet.create({
    container:{
        padding:10,
        borderRadius: 15,
        backgroundColor: "#ffffff21",
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:20,
        
    },
    listContent: {
        marginLeft:50,
        
    }
})