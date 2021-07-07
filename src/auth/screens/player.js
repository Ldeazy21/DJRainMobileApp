import React, { useState, useLayoutEffect, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import music from "../../data";
import { Slider } from "react-native-elements";
import TrackPlayer from "react-native-track-player";
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks'
import { AuthContext } from "../Context/AuthContext";
import Modal from 'react-native-modal'
import { StatusBar } from "react-native";
function Player() {

  const { modalVisible, toggleModal,songInfo,playing,setPlaying } = useContext(AuthContext)
  // const [playing, setPlaying] = useState(false);

  const [progres, setProgress] = useState(0);

  const [isSeeking, setIsSeeking] = useState(false);


  const { duration, position } = useTrackPlayerProgress(250)





  useEffect(() => {
    if (!isSeeking && position && duration) {
      setProgress(position / duration)
    }
  }, [position, duration])
  //function called when the user starts sliding

  const slidingStarted = () => {
    setIsSeeking(true)
  }

  const slidingCompleted = async (value) => {
    await TrackPlayer.seekTo(value * duration);

    setProgress(value);
  }


  const getTractData = async () => {
    const state = await TrackPlayer.getState();
    if (state === TrackPlayer.STATE_PLAYING) {
      console.log("The player is playing");
    }

    const trackId = await TrackPlayer.getCurrentTrack();
    const trackObject = await TrackPlayer.getTrack(trackId);
    // setTitle(route.params.song.title);
    // setImage(route.params.song.artwork);
    // setArtist(route.params.song.artist);
    setTitle(trackObject.title);
    setImage(trackObject.artwork);
    setArtist(trackObject.artist);
    const duration = (await TrackPlayer.getDuration()) / 60;
    const position = (await TrackPlayer.getPosition()) / 60;
    setPosition(Math.round(position));
    setDuration(Math.round(duration));
  };


  return (
    <SafeAreaView >
    
      <Modal
        isVisible={modalVisible}
        
        animationIn="slideInUp"
        animationInTiming={300}
        animationOutTiming={500}
        animationOut="slideInUp"
        onBackdropPress={() => {
          toggleModal()
        }}
        style={{
          margin: 0
        }}
        onSwipeComplete={() => { toggleModal() }}

      >

        <View style={styles.container}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',


            // width:500
          }}>
            <TouchableOpacity
            
            onPress={() => {
              toggleModal()
            }}  >
              <FontAwesome name="chevron-down" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Image
            // source={require("../../img/album-arts/death-bed.jpg")}
            source={{ uri: songInfo.artwork }}
            style={{ width: "100%", height: 320, borderRadius: 25,backgroundColor:'transparent' }}
          />
          <Text style={styles.title}>{songInfo.title}</Text>
          <Text style={styles.artist}>By {songInfo.artist}</Text>
          <Slider
            value={progres}


            minimumValue={0}
            maximumValue={1}


            onSlidingStart={slidingStarted}
            onSlidingComplete={slidingCompleted}

            thumbStyle={{
              height: 11,
              width: 11,
              backgroundColor: "blue",
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.timings}>{new Date(position * 1000).toISOString().substr(11, 8)}</Text>
            <Text style={styles.timings}>{new Date(duration * 1000).toISOString().substr(11, 8)}</Text>
          </View>
          <View style={styles.controller}>
            <TouchableOpacity
              onPress={() => {
                TrackPlayer.seekTo(position- 5)
                getTractData();
              }}
            >
              <MaterialCommunityIcons
                name="step-backward"
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
                // TrackPlayer.skipToNext();
                TrackPlayer.seekTo(position + 5)
                getTractData();
              }}
            >
              <MaterialCommunityIcons
                name="step-forward"
                size={40}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.volume}>
       

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default Player;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001B40",
    minHeight: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#fff",
    lineHeight: 33.41,
    paddingTop: 8,
    textTransform: "capitalize",
  },
  artist: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19.09,
    paddingTop: 8,
    textTransform: "capitalize",
    color: "white",
    opacity: 0.64,
  },
  timings: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 11,
    marginTop: -15,
  },
  controller: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  volume: {
    marginTop: 20,
  },
});
