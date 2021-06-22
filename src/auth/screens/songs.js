
import React,{useContext} from 'react';
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import SongCard from '../../components/SongCard';
import { AuthContext } from '../Context/AuthContext';
function Songs({navigation}) {
const {music} = useContext(AuthContext)
   
    return (
        <View style={styles.container}>
                    <ScrollView>

        {
            music.map(song =>(

                <SongCard key={song.id} song={song} navigation={navigation}/>
            ))
        }
            </ScrollView>
                </View>

            
        
    )
}

export default Songs


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001B40",
        minHeight: "100%",
        // paddingLeft: 20,
        // paddingRight: 20,
        // paddingTop: 10,
      },
})