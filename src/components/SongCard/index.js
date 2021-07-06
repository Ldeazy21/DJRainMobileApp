import React,{useState,useContext} from 'react';
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import Player from '../../auth/screens/player'
import { AuthContext } from '../../auth/Context/AuthContext';
import TrackPlayer from "react-native-track-player";
function SongCard({ song,navigation }) {
    
const {getSelectedSong, playSong} =  useContext(AuthContext)
const [playing,setPlaying] =  useState(false)
    // const sendSong = (song)=>{
    //     getSelectedSong(song)
    // }
    return (

        <View style={{
            // marginTop:5
        }} >
            <TouchableOpacity style={styles.container}
                onPress={() => {
                    // navigation.navigate('Player', { song })
                    // getSelectedSong(song)
                    
                    // TrackPlayer.add(song)
                    // TrackPlayer.play()

                    playSong(song)
                    // alert(JSON.stringify(song))
                   
                }}
            >

                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Avatar
                        rounded
                        source={{ uri: song?.artwork }}
                        size={58}
                    />
                    <View style={styles.listContent}>
                        <Text style={{ fontSize: 13, fontWeight: '700', color: 'white', width: 172 }}>{song?.title}</Text>
                        <Text style={{ fontSize: 13, fontWeight: '500', color: 'lightgrey', width: 172 }}>{song?.artist}</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                    onPress={()=>{
                        playSong(song)
                    }}
                    >

                        <MaterialCommunityIcons name='play-circle' size={40} color='#003e95' />
                    </TouchableOpacity>
                </View>

               
               
            </TouchableOpacity>
        </View>
    )
}

export default SongCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop:20,
        borderBottomWidth: .5,
        borderBottomColor:'#00183b',


        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,


    },
    listContent: {
        marginLeft: 10,

    }
})