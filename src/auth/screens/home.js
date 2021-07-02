import React, { useState, useLayoutEffect, useContext } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import SongCard from '../../components/SongCard';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Player from './player';
// import MiniPlayer from '../../components/miniPlayer';

import { AuthContext } from '../Context/AuthContext';
import { SafeAreaView } from 'react-native';
function Home({ navigation }) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const [selectedSong, setSelectedSong] = useState(null)
  const { song, modalVisible, toggleModal,music } = useContext(AuthContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
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
          <TouchableOpacity onPress={() => setShowSearchInput(!showSearchInput)}>
            <MaterialIcons name="search" size={26} color='#003e95' />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={26} color='#003e95' />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);



  return (
    <>
    <View style={styles.container}>
      <ScrollView>

        {
          music.map(song => (
            <SongCard key={song.id} song={song} navigation={navigation} />
          ))
        }
      </ScrollView>
      {/* <MiniPlayer /> */}
      {/* <Modal
        transparent={true}
        visible={false}
       
        animationType="slide"
      // transparent={true}
      // onRequestClose={
        //   toggleModal()
      // }
      >
        <TouchableWithoutFeedback onPress={()=>{
          toggleModal()
        }}>
        <View
        style={styles.modal}


        >

        <MiniPlayer song={song} />
        </View>
        </TouchableWithoutFeedback>
      </Modal> */}
      {
        modalVisible && (
          
        <Player song={song} />
        )

      }
    </View>

    </>



  )
}

export default Home


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001B40",
    flex:1
    // ...StyleSheet.absoluteFillObject
    // minHeight: "100%",
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingTop: 10,
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
  }
})