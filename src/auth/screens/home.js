// import React, { useState, useLayoutEffect, useContext } from 'react';
// import { View, Text, TextInput, ScrollView,StatusBar, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
// import SongCard from '../../components/SongCard';
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import Player from './player';
// // import MiniPlayer from '../../components/miniPlayer';
// import SearchInput from '../../components/Search';
// import { AuthContext } from '../Context/AuthContext';
// import { SafeAreaView } from 'react-native';
// function Home({ navigation }) {
//   // const [showSearchInput, setShowSearchInput] = useState(false);
//   const [showPlayer, setShowPlayer] = useState(false);

//   const [searchTerm,setSearchTerm] = useState('')
//   const [selectedSong, setSelectedSong] = useState(null)
//   const { song, modalVisible, toggleModal,music,logout,showSearchInput,toggleSearch } = useContext(AuthContext);

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       title: "Home",
//       headerShown:true,
//       headerTitleStyle:{
//           color:"#1A54DC",

//           alignSelf: 'center'
//         },


//       headerLeft: () => (
//         <View style={{ marginLeft: 20 }}>
//           <TouchableOpacity
//             onPress={() => {
//              navigation.toggleDrawer()
//             }}
//           >
//             <MaterialIcons name="menu" size={26} color='#003e95' />
//           </TouchableOpacity>
//         </View>
//       ),
//       headerRight: () => (
//         <View style={{ marginRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
//           <TouchableOpacity onPress={()=>{
//             toggleSearch()
//           }}>
//             <MaterialIcons name="search" size={26} color='#003e95' />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>logout()}>
//            <AntDesign name="logout" size={20} color='#1A54DC'/>
//           </TouchableOpacity>
//         </View>
//       ),
//     });
//   }, [navigation]);




//   return (
//     <>
//     <View style={styles.container}>
//       {showSearchInput &&

// <View style={styles.searchContainer}>
//         <View style={{flexDirection:'row',
//         width:300,
//         alignItems:'center',
//         padding:20,
//         justifyContent:'space-between',
//       backgroundColor: "#ffffff21",
//     // opacity:1,
//     borderRadius: 5,
//     width: '100%',
//     // position: "absolute",
//     // paddingLeft:50,
//     // height:69,
//     // color:'white'
        
//         }}>

//       <MaterialIcons
//         name="search"
//         size={26}
//         color="#fff"
//         // style={styles.searchIcon}
//       />

//       <TextInput 
//       style={styles.search} 
//       placeholder="Search" 
//       placeholderTextColor="white"
//       onChangeText={(text)=>{
//         setSearchTerm(text)
//       }}
//       />
//       <TouchableOpacity onPress={()=>{
//         toggleSearch()
//       }}>


//       <MaterialIcons   name="close"
//         size={20}
//         color="#fff"
//         style={styles.searchIcon}/>
//       </TouchableOpacity>
//         </View>
//     </View>


//       }
//       <ScrollView>

//         {
//           music.filter((val)=>{
//             if(searchTerm == ""){
//               return val;
//             }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
//               return val;
//             }
//           }).map(song => (
//             <SongCard key={song.id} song={song} navigation={navigation} />
//           ))
//         }
//       </ScrollView>
//       {/* <MiniPlayer /> */}
//       {/* <Modal
//         transparent={true}
//         visible={false}
       
//         animationType="slide"
//       // transparent={true}
//       // onRequestClose={
//         //   toggleModal()
//       // }
//       >
//         <TouchableWithoutFeedback onPress={()=>{
//           toggleModal()
//         }}>
//         <View
//         style={styles.modal}


//         >

//         <MiniPlayer song={song} />
//         </View>
//         </TouchableWithoutFeedback>
//       </Modal> */}
//       {
//         modalVisible && (
          
//         <Player song={song} />
//         )

//       }
//     </View>

//     </>



//   )
// }

// export default Home


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#001B40",
//     flex:1,
//     // ...StyleSheet.absoluteFillObject
//     // minHeight: "100%",
//     // paddingLeft: 20,
//     // paddingRight: 20,
//     // paddingTop: 10,
//   },
//   searchContainer: {
//     flexDirection: "row",
//   },
//   modal: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     left: 0,
//     backgroundColor: 'red',


//   },
//   modalContent: {
//     backgroundColor: 'lime'
//   },
//   search: {
//     // backgroundColor: "#ffffff21",
//     // opacity:1,
//     borderRadius: 5,
//     width: '100%',
//     position: "absolute",
//     paddingLeft:50,
//     height:69,
//     color:'white'
//   },
// })

import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ListItem, Icon } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import List from "../../components/List";

const Home = ({ navigation }) => {
  const drawer = createDrawerNavigator();
  const list = [
    { id:Math.random(),title: "HOME",name:'Home' ,},
    { id:Math.random(),title: "ABOUT DJ RAIN",name:'About' ,},
    { id:Math.random(),title: "MIXES",name:'Mixes', },
    { id:Math.random(),title: "EVENTS",name:'Events', },
    { id:Math.random(),title: "PHOTOS",name:'Photos', },
    // { title: "BUY DJ RAIN MERCH" },
    { title: "ARTISTS OF THE MONTH",name:'Spotlight' },
  ];
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
                 navigation.toggleDrawer()
                }}
              >
                <MaterialIcons name="menu" size={26} color='#003e95' />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20, flexDirection:'row', justifyContent:'center',alignItems:'center' }}>
             
             
             <TouchableOpacity>
                {/* <AntDesign name="logout" size={26} color='#1A54DC'/> */}
              </TouchableOpacity> 
            </View>
          ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>

      <Image style={styles.image} source={require("../../img/djrain.png")} />
      {list.map((item, i) => (
        
        
        <List item={item} key={i} navigation={navigation} />
        
        ))}
        </View>


{/* This is a banner image that client will update/maintain */}

      <View style={styles.imageSection}>
        <Image
          style={styles.frontImage}
          source={require("../../img/image.png")}
        />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003e95",
    justifyContent:'space-between',
    // ...StyleSheet.absoluteFillObject,
    flex:1
    // paddingRight: 26,
    // paddingLeft: 26,
  },
  list: {
    backgroundColor: "transparent",
  },
  image: {
    // position: "absolute",
    width: '100%',
    height: 750,
    // left: -800,
    // top: 90,
    ...StyleSheet.absoluteFillObject,
  },
  imageSection: {
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingHorizontal:20,
    alignItems: "center",
    bottom: 30,
    flex: 1,
  },
  frontImage: {
    width: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
});
