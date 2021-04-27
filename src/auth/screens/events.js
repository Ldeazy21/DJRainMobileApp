import React,{useLayoutEffect,useState} from 'react';
import {View,TouchableOpacity,StyleSheet,FlatList,Text} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EventsList from '../../components/EventsList';

function Events({navigation}) {
    useLayoutEffect(() => {
        
        navigation.setOptions({ 
        //   title: "Donn",
            headerShown:true,
            headerTitleStyle:{
                color:"#1A54DC",
  
                alignSelf: 'center'
              },
    
        //   headerLeft: () => (
        //     <View style={{ marginLeft: 20 }}>
        //       <TouchableOpacity>
        //         <MaterialIcons name="menu" size={26} color='#003e95'/>
        //       </TouchableOpacity>
        //     </View>
        //   ),
          headerRight: () => (
            <View style={{ marginRight: 20, flexDirection:'row', justifyContent:'center',alignItems:'center' }}>
             
             
             <TouchableOpacity>
                <MaterialIcons name="settings" size={26} color='#1A54DC'/>
              </TouchableOpacity> 
            </View>
          ),
        });
      }, [navigation]);
      const [btnActive,setBtnActive] = useState(true);
      const  events = [
          {
              id:Math.random(),
              eventType:'Club Event',
              location:'Lavish Lounge',
              time:'10pm-12pm',
              date:'1 FEB'
          },
          {
              id:Math.random(),
              eventType:'Club Event',
              location:'Lavish Lounge',
              time:'10pm-12pm',
              date:'1 FEB'
          },
          {
              id:Math.random(),
              eventType:'Club Event',
              location:'Lavish Lounge',
              time:'10pm-12pm',
              date:'1 FEB'
          },
      ]
    return (
        <View style={styles.container}>
            <View style={styles.switch}>
                <TouchableOpacity style={styles.switchBtn}  onPress={() =>setBtnActive(!btnActive)}><Text style={{color:'#fff'}}>Upcoming</Text></TouchableOpacity>
                <TouchableOpacity style={styles.switchBtn} onPress={() =>setBtnActive(!btnActive)}><Text style={{color:'#fff'}}>Past</Text></TouchableOpacity>
            </View>
            <View>
                <Text style={{fontSize:22,color:'#fff',fontWeight:'600'}}>Latest Events</Text>
            </View>
        <FlatList 
         keyExtractor={(item)=>item.id}
         data={events}
         renderItem={({item})=>(
            <EventsList
            event={item}
            />
         )}


        
        
        />
     


        </View>

    )
}

export default Events
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001B40",
        ...StyleSheet.absoluteFillObject,
        paddingRight: 26,
        paddingLeft: 26,
    },
    switch:{
        flexDirection:'row',
        justifyContent: 'center',alignItems:'center',
        marginTop:30,
        marginBottom:30,
    },
    switchBtn: {
        width:76,
        height:28,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'white'
        borderColor:'white',
        borderWidth:1,
        borderRadius: 3
    },
    switchBtnActive: {
backgroundColor:'white'
    }
})
