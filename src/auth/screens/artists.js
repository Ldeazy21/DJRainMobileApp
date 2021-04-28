import React,{useLayoutEffect} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
function Spotlight({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:true,
            title:'Artist Spotlight',
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
           source={require("../../img/aboutheader.png")}
           />
           </View>
           <View style={styles.artistDetails}>

           <Text style={styles.title}>Artists Name</Text>
          <View style={{justifyContent:'center',alignItems:'center',}}>
              
           <Text style={styles.subTitle}>
           DJ Cassidy has been at the nexus of music, fashion, and nightlife for over half his living years as the go-to deejay for music impresarios, entertainment moguls, fashion icons, cultural trendsetters, and even world leaders. When President Obama wanted a deejay for both of his Inaugurations and his fiftieth birthday party at the White House, there's only one person he called. 

           </Text>
           
          </View>
           
           <TouchableOpacity style={styles.btn}>
<MaterialCommunityIcons  name='instagram' size={25} color="white" />
<Text style={styles.btnText}> @Artistgi</Text>
           </TouchableOpacity>
           
           <TouchableOpacity style={styles.btn}>
           <MaterialCommunityIcons  name='web' size={25} color="white" />
<Text style={styles.btnText}> Artists.co</Text>

           </TouchableOpacity>
        
        
           </View>
       </View>
    )
}

export default Spotlight
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
        color:'#ffffff95',
        // color:'white',
        marginTop:5,
        fontWeight:'600',
        fontSize:13, 
        lineHeight:18,
        marginBottom:10
    },
    btn: {
        
        flexDirection:'row',
        marginTop:10,
        
        alignItems: 'center',
    },
    btnText:{
        color:'white',
        textTransform:'uppercase',
        marginLeft:10,
        fontWeight:'600'

    },
    image:{
        width:'100%',
        height:180,
        top:0,
        position: "absolute",
    
  
    },
    artistDetails: {
        position: 'absolute',
    
        left: '10.13%',
        right: '32.8%',
        top: '25.71%',
        bottom: '61.58%',
        width:323,
        height:193,
        
    },
   
    

    
    
})