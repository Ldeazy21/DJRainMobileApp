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
    const [playing, setPlaying] = useState(false);
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [artist, setArtist] = useState(null);

    const { duration, position } = useTrackPlayerProgress(250)

    const { modalVisible, toggleModal } = useContext(AuthContext)


    const setUpTrackPlayer = async () => {
        try {


            await TrackPlayer.setupPlayer();
            await TrackPlayer.add(song);


        } catch (e) {
            console.log(e);
        }
    };
    useLayoutEffect(() => {
        TrackPlayer.updateOptions({
            stopWithApp: false,
            capabilities: [
                TrackPlayer.CAPABILITY_SEEK_TO,
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
            ],
        });
        setUpTrackPlayer();
        getTractData();
        TrackPlayer.play();
        // setPlaying(true);
        return () => TrackPlayer.destroy();
    }, []);
    useEffect(() => {

    }, [position, duration])



    const getTractData = async () => {
        const state = await TrackPlayer.getState();
        if (state === TrackPlayer.STATE_PLAYING) {
            console.log("The player is playing");
        }

        const trackId = await TrackPlayer.getCurrentTrack();
        const trackObject = await TrackPlayer.getTrack(trackId);
        setTitle(trackObject.title);
        setImage(trackObject.artwork);
        setArtist(trackObject.artist);
        const duration = (await TrackPlayer.getDuration()) / 60;
        const position = (await TrackPlayer.getPosition()) / 60;
        setPosition(Math.round(position));
        setDuration(Math.round(duration));
    };

    return (


        // <View style={styles.container}>
        <Modal
            isVisible={modalVisible}
            // deviceHeight={10}
        onBackdropPress={()=>{
            toggleModal()
        }}
        onSwipeComplete={()=>{toggleModal()}}
        swipeDirection="left"
        >
            {/* <TouchableWithoutFeedback
                // onPress={alert("doNNE")}
                onPress={() => {
                    toggleModal()
                }}
            > */}
                <View 
                // style={styles.modal}
                style={{flex:1}}
                >
                    <View style={styles.controller}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>

                            <Avatar
                                rounded
                                source={{ uri: 'https://yt3.ggpht.com/ytc/AAUvwnhdclmrnN0BlBH9oLvp40Ltzu5AZYENcgnPcymuzQ=s900-c-k-c0x00ffffff-no-rj' }}
                                size={58}
                            />
                            <View>
                                <Text style={styles.title}>Song Name</Text>
                                <Text style={styles.artist}>Artist name</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                            <TouchableOpacity
                                onPress={() => {
                                    TrackPlayer.skipToPrevious();
                                    getTractData();
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="skip-previous"
                                    size={40}
                                    color="white"
                                />
                            </TouchableOpacity>
                            {!playing ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        TrackPlayer.play();
                                        getTractData();
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
                            <TouchableOpacity
                                onPress={() => {
                                    TrackPlayer.skipToNext();
                                    getTractData();
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="skip-next"
                                    size={40}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            {/* </TouchableWithoutFeedback> */}
        </Modal>



    );
}

export default MiniPlayer;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001B40",

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
