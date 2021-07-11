import React, { useState, useLayoutEffect, useEffect,useContext } from 'react';
import { View, Text, TextInput, ScrollView,StatusBar, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import SongCard from '../../components/SongCard';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Player from './player';
import MiniPlayer from '../../components/miniPlayer';
import SearchInput from '../../components/Search';
import { AuthContext } from '../Context/AuthContext';
import { SafeAreaView } from 'react-native';
function Mixes({ navigation }) {
  // const [showSearchInput, setShowSearchInput] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const [searchTerm,setSearchTerm] = useState('')
  const [selectedSong, setSelectedSong] = useState(null)
  const { song, modalVisible, toggleModal,music,logout,showSearchInput,toggleSearch,openMiniPlayer,toggleMiniPlayer } = useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Mixes",
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
        <View style={{ marginRight: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={()=>{
            toggleSearch()
          }}>
            <MaterialIcons name="search" size={26} color='#003e95' />
          </TouchableOpacity>
          
        </View>
      ),
    });
  }, [navigation]);

  // useEffect(()=>{
  //   toggleMiniPlayer()
  // },[])
  


  return (
    <>
    <View style={styles.container}>
      {showSearchInput &&

<View style={styles.searchContainer}>
        <View style={{flexDirection:'row',
        width:300,
        alignItems:'center',
        padding:20,
        justifyContent:'space-between',
      backgroundColor: "#ffffff21",
    // opacity:1,
    borderRadius: 5,
    width: '100%',
    // position: "absolute",
    // paddingLeft:50,
    // height:69,
    // color:'white'
        
        }}>

      <MaterialIcons
        name="search"
        size={26}
        color="#fff"
        // style={styles.searchIcon}
      />

      <TextInput 
      style={styles.search} 
      placeholder="Search" 
      placeholderTextColor="white"
      onChangeText={(text)=>{
        setSearchTerm(text)
      }}
      />
      <TouchableOpacity onPress={()=>{
        toggleSearch()
      }}>


      <MaterialIcons   name="close"
        size={20}
        color="#fff"
        style={styles.searchIcon}/>
      </TouchableOpacity>
        </View>
    </View>


      }
      <ScrollView>

        {
          music.filter((val)=>{
            if(searchTerm == ""){
              return val;
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map(song => (
            <SongCard key={song.id} song={song} navigation={navigation} />
          ))
        }
      </ScrollView>
      {openMiniPlayer && (

        <MiniPlayer  />
      )
      }
    
      {
        modalVisible && (
          <>
        <Player song={song} />
       
        </>
        )

      }
    </View>

    </>



  )
}

export default Mixes


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001B40",
    flex:1,

  },
  searchContainer: {
    flexDirection: "row",
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'red',


  },
  modalContent: {
    backgroundColor: 'lime'
  },
  search: {
    // backgroundColor: "#ffffff21",
    // opacity:1,
    borderRadius: 5,
    width: '100%',
    position: "absolute",
    paddingLeft:50,
    height:69,
    color:'white'
  },
})