

import React,{useLayoutEffect,useState} from 'react'
import {View,Text,FlatList,Image,StyleSheet,TouchableOpacity} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Modal from 'react-native-modal'
import ImageViewer from 'react-native-image-zoom-viewer';
MaterialIcons.loadFont()
function Photos({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:true,
            headerTitleStyle:{
                color:"#1A54DC",
  
                alignSelf: 'center'
              },
              headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                  <TouchableOpacity
                    onPress={() => {
                     navigation.navigate('Home')
                    }}
                  >
                     <MaterialIcons name="arrow-back-ios" size={17} color='#003e95' />
                  </TouchableOpacity>
                </View>
              ),
              headerRight: () => (
                <View style={{ marginRight: 20, flexDirection:'row', justifyContent:'center',alignItems:'center' }}>
                 
                 
                 <TouchableOpacity>
                    {/* <MaterialIcons name="settings" size={26} color='#1A54DC'/> */}
                  </TouchableOpacity> 
                </View>
              ),
        })
    },[navigation])
    const columns =2
    const photos = [
      {
        key: Math.random(),
        url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl2ZSUyMG11c2ljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        key: Math.random(),
        url: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      },
      {
        key: Math.random(),
        url: "https://i0.wp.com/www.naijanowell.com/wp-content/uploads/2019/12/DFF.jpg?resize=300%2C300&ssl=1",
      },
      {
        key: Math.random(),
        url: "https://i1.sndcdn.com/avatars-000314597584-5ebg5z-t500x500.jpg",
      },
      {
        key: Math.random(),
        url: "https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGolMjBjb250cm9sbGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      {
        key: Math.random(),
        url: "https://media.istockphoto.com/photos/console-desk-at-nightclub-picture-id611607148?k=6&m=611607148&s=612x612&w=0&h=SCaZ9Ycx3AHmtluNn_vQf9K4yoREa0dnhXUXICciqZo=",
      },
      {
        key: Math.random(),
        url: "https://www.popsci.com/uploads/2021/01/09/FUYQCMIJ25HXZKOQ576DID3M7E.jpg?width=1440",
      },
     
      
      {
        key: Math.random(),
        url: "https://thumbs.dreamstime.com/b/friends-enjoying-house-party-friends-posing-selfie-wearing-dark-sunglasses-house-party-young-men-women-having-118513569.jpg",
      },
      {
        key: Math.random(),
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrFLqPVMyKGyydENTwmTELVcDb4akkMYN0w&usqp=CAU",
      },
      {
        key: Math.random(),
        url: "https://i.pinimg.com/originals/78/fb/3f/78fb3f5b04e5669483491751b08b6e29.jpg",
      },
      {
        key: Math.random(),
        url: "https://smlnews.ug/wp-content/uploads/2020/09/images-11.jpeg",
      },
    
      
      
      {
        key: Math.random(),
        url: "https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/DESPERADOS-SMALL-APARTMENT-20190729094133314.jpg",
      },
  
      
      
    ];



    const [visible,setVisible] =  useState(false)
    const [imageIndex,setImageIndex] =  useState(null)
    
    function toggleModal() {

      setVisible(!visible)      
    }
    return (
        
   <View style={styles.container}>
    <FlatList 
    numColumns={columns}
    data={photos}
    renderItem={({item,index})=>(
        // <Text>Sonnie</Text>
        <TouchableOpacity onPress={()=>{
          toggleModal()
          setImageIndex(index)
        }}>

            <Image style={styles.image} source={{uri:item.url}}/>
        </TouchableOpacity>
    )}
    />
     <Modal
     style={{
      margin: 0
    }}

          
    animationIn="bounceInUp"
    animationInTiming={900}
 
 
     fullScreen visible={visible} transparent={true}>
      
                <ImageViewer imageUrls={photos}
                 index={imageIndex} 
                 enableImageZoom={true}
                //  style={{width:500,height:350}}

                renderHeader={()=>(
                  <>
                  <TouchableOpacity
       onPress={toggleModal}
       style={{
        
         zIndex:100,
         justifyContent:'center',
        alignItems:'flex-end',
        paddingTop:30,
        position:'absolute',
        right:10
       }}
       > 

     <MaterialIcons
    
     name="close" size={30} color='#fff' />
       </TouchableOpacity>
                  </>
                )}
                 />


                 
            </Modal>

    </View>
    )
}

export default Photos
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001B40",
        flex:1,
        // ...StyleSheet.absoluteFillObject,
        justifyContent:'center',
        alignItems: 'center',
        // paddingHorizontal:15
    },
image:{
    borderRadius:5,
    height:202,
    width:202,

    
    marginLeft:10,
    marginTop:10,
}
})