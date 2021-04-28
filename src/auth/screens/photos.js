

import React,{useLayoutEffect} from 'react'
import {View,Text,FlatList,Image,StyleSheet,TouchableOpacity} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
function Photos({navigation}) {
    useLayoutEffect(() => {
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
    },[])
    const columns =3
    const photos = [
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/yZlNNzVHsYg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/sDHrgXXCkpU",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/fXQppSiTRGg",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
     
      
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
    
      
      
      {
        key: Math.random(),
        image: "https://unsplash.com/photos/9yfWx6GpzKg",
      },
  
      
      
    ];
    
    
    return (
        
   <View style={styles.container}>
    <FlatList 
    numColumns={columns}
    data={photos}
    renderItem={({item})=>(
        // <Text>Sonnie</Text>
        <TouchableOpacity>
            <Image style={styles.image} source={require('../../img/photo.png')}/>
        </TouchableOpacity>
    )}
    />

    </View>
    )
}

export default Photos
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001B40",
        ...StyleSheet.absoluteFillObject,
        justifyContent:'center',
        alignItems: 'center',
        padding:15
    },
image:{
    borderRadius:5,
    height:102,
    width:102,

    
    marginLeft:10,
    marginTop:10,
}
})