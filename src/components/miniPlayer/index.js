import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import {
    View,
    Text,
    Image,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,

    TouchableWithoutFeedback
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from 'react-native-modal'
import TrackPlayer from "react-native-track-player";
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks'
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { AuthContext } from "../../auth/Context/AuthContext";
function MiniPlayer({ song }) {

    const { width, height } = Dimensions.get("window");
    const [playing, setPlaying] = useState(true);
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [artist, setArtist] = useState(null);

    const { duration, position } = useTrackPlayerProgress(250)

    const { modalVisible, toggleModal,songInfo } = useContext(AuthContext)


    const setUpTrackPlayer = async () => {
        try {


            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(song);


        } catch (e) {
            console.log(e);
        }
    };

    return (


        <View style={styles.container}>
    
                <TouchableOpacity

                onPress={()=>{
                    toggleModal()
                }}

                // style={styles.modal}
                style={{flex:1}}
                >
                    <View style={styles.controller}>
                        <View style={{ 
                            flexDirection: 'row', alignItems: "center" }}>

                            <Avatar
                                rounded
                                source={{ uri: songInfo?.artwork }}
                                size={58}
                            />
                            <View
                            style={{
                                paddingLeft:10
                            }}
                            >
                                <Text style={styles.title}>{songInfo?.title}</Text>
                                <Text style={styles.artist}>{songInfo?.artist}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                            {/* <TouchableOpacity
                                // onPress={() => {
                                //     TrackPlayer.skipToPrevious();
                                //     getTractData();
                                // }}
                            >
                                <MaterialCommunityIcons
                                    name="skip-previous"
                                    size={40}
                                    color="white"
                                />
                            </TouchableOpacity> */}
                            {!playing ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        TrackPlayer.play();
                                        // getTractData();
                                        setPlaying(true);
                                    }}
                                >
                                    <MaterialCommunityIcons name="play" size={50} color="white" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        TrackPlayer.pause();
                                        setPlaying(false);
                                    }}
                                >
                                    <MaterialCommunityIcons name="pause" size={50} color="white" />
                                </TouchableOpacity>
                            )}
                            {/* <TouchableOpacity
                                // onPress={() => {
                                //     TrackPlayer.skipToNext();
                                //     getTractData();
                                // }}
                            >
                                <MaterialCommunityIcons
                                    name="skip-next"
                                    size={40}
                                    color="white"
                                />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </TouchableOpacity>

        </View>



    );
}

export default MiniPlayer;
const styles = StyleSheet.create({
    container: {
     
        backgroundColor:'black',
        flex:1,
        paddingHorizontal:10,
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
        lineHeight: 33.41,
        // paddingTop: 8,
        textTransform: "capitalize",
    },
    artist: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 19.09,
        // paddingTop: 8,
        textTransform: "capitalize",
        color: "white",
        opacity: 0.64,
    },

    controller: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 10
        // justifyContent: "space-evenly",
        // marginTop: 30,
    },
    modal: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0

    }

});
