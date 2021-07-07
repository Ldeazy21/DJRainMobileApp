import React,{useContext, useLayoutEffect} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity,StatusBar} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EntypoIcons from "react-native-vector-icons/Entypo";
import Modal from 'react-native-modal'
import { AuthContext } from '../Context/AuthContext';
import { SafeAreaView } from 'react-native';
function Event() {
const {eventModal,eventDetails,toggleEvent} = useContext(AuthContext)
    useLayoutEffect(()=>{
       
    },[])
    return (
        <SafeAreaView>
             <StatusBar   barStyle="default" backgroundColor="grey"   />
        <Modal
        
        isVisible={eventModal}
        hasBackdrop={true}
        animationIn="slideInRight"
        animationInTiming={300}
        animationOutTiming={500}
        animationOut="slideInLeft"
       
        
        style={{
          margin: 0
        }}
     
        >
       <View style={styles.container}>
           <View style={{
               backgroundColor:'white',
            //    height:60,
               position:'absolute',
               padding:15,
               width:'100%',
               justifyContent:'space-between',
               alignItems:'center',
               flexDirection:'row',
               zIndex:40
           }}>
               <TouchableOpacity style={{
                   flexDirection:'row',
                   alignItems:'center',
                   justifyContent:'center'

               }} onPress={()=>{
                   toggleEvent(eventDetails)
               }}>
               <MaterialIcons name="arrow-back-ios" size={17} color='#003e95' />
               <Text 
               style={{
                color:'blue',
                fontSize:20,
                fontWeight:'bold'
               }}
               >Events</Text>
               
               </TouchableOpacity>
            
           </View>
           <View style={styles.coverImage}>

           <Image
           style={styles.image}
           source={require("../../img/song.png")}
           />
           </View>
           <View style={styles.eventDetails}>
           {/* id:Math.random(),
              eventType:'Club Event',
              location:'Lavish Lounge',
              time:'10pm-12pm',
              date:'1 FEB' */}
           <Text style={styles.title}>{eventDetails.eventType}</Text>
           <Text style={styles.subTitle}>{eventDetails.time}</Text>
           <Text style={styles.subTitle}>{eventDetails.location}</Text>
           <Text style={styles.subTitle}>200 E St.John St</Text>
           <Text style={styles.subTitle}>Spartanburg, SC 29607</Text>
           <TouchableOpacity style={styles.shareBtn}>
<MaterialCommunityIcons  name='share' size={20} color="white" />
           </TouchableOpacity>
           <View style={styles.btnView}>
               <TouchableOpacity style={styles.directionBtn}>
                   <EntypoIcons style={{marginRight:10}} name='direction' size={16} color='white'/>
                   <Text style={styles.directionBtnText}>DIRECTIONS</Text>
               </TouchableOpacity>
           </View>
           </View>
       </View>
       </Modal>
       </SafeAreaView>
    )
}

export default Event

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001B40",
        // ...StyleSheet.absoluteFillObject,
        flex:1
       
    },
    coverImage:{
width:'100%',
maxHeight:382,

    },
    title:{
        fontWeight:'700',
        fontSize:22,
        color:'white'
    },
    subTitle: {
        color:'#ffffff70',
        fontWeight:'500',
        fontSize:13, 
        lineHeight:18
    },
    shareBtn: {
        backgroundColor:'#ffffff21',
        width:40,
        height:40,
        marginTop:10,
        justifyContent:'center',
        alignItems: 'center',
    },
    image:{
        width:'100%',
        height:382,
        top:-150,
        position: "absolute",
    
  
    },
    eventDetails: {
        position: 'absolute',
    
        left: '10.13%',
        right: '32.8%',
        top: '45.57%',
        bottom: '44.21%',
        
    },
    btnView: {
        marginTop:73,
      
        
    },
    directionBtn:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#003E95',
        width:300,
        height:50,
        borderRadius:5

        

        
    },
    directionBtnText:{
        color:'white',
        fontWeight:'600',
        fontSize:16,
        textTransform:'uppercase'
    }
  
    
})
