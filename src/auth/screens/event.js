import React,{useLayoutEffect} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EntypoIcons from "react-native-vector-icons/Entypo";
function Event({navigation}) {

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitleStyle:{
                color:"#1A54DC",
  
                alignSelf: 'center'
              },
              headerRight: () => (
                <View style={{ marginRight: 20, flexDirection:'row', justifyContent:'center',alignItems:'center' }}>
                 
                 
                 <TouchableOpacity>
                    <MaterialIcons name="settings" size={26} color='#1A54DC'/>
                  </TouchableOpacity> 
                </View>
              ),
        })
    },[navigation])
    return (
       <View style={styles.container}>
           <View style={styles.coverImage}>

           <Image
           style={styles.image}
           source={require("../../img/song.png")}
           />
           </View>
           <View style={styles.eventDetails}>

           <Text style={styles.title}>Event Title</Text>
           <Text style={styles.subTitle}>10PM-12PM</Text>
           <Text style={styles.subTitle}>Lavish Lounge</Text>
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
    )
}

export default Event

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001B40",
        ...StyleSheet.absoluteFillObject,
       
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
        top:-85,
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
