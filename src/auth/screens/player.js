import React,{useState} from 'react';
import Controller from '../../components/Controller'
import {View,Text,FlatList,Image,Dimensions,SafeAreaView} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Player() {
const [songs,setSongs] = useState([]);

const { width, height } = Dimensions.get("window");
 const data = [
        {
          title: "death bed",
          artist: "Powful",
          image:"../../img/album-arts/death-bed.jpg",
          id: "1",
        },
        {
          title: "bad liar",
          artist: "Imagine Dragons",
          image:"../../img/album-arts/bad-liar.jpg",
          id: "2",
        },
        {
          title: "faded",
          artist: "Alan Walker",
          image:"../../img/album-arts/faded.jpg",
          id: "3",
        },
        {
          title: "hate me",
          artist: "Ellie Goulding",
          image:"../../img/album-arts/hate-me.jpg",
          id: "4",
        },
        {
          title: "Solo",
          artist: "Clean Bandit",
          image:"../../img/album-arts/solo.jpg",
          id: "5",
        },
        {
          title: "without me",
          artist: "Halsey",
          image:"../../img/album-arts/without-me.jpg",
          id: "6",
        },
      ];
        
     return (
       <SafeAreaView>
      <View>
 
 
           <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          
            
          keyExtractor={(item)=>item.id}
          data={data}
          renderItem={({item})=>(
            <View style={{flex:1}}>
              <View style={{alignItems:'center',width:width, }}>
                
            <Image source={require('../../img/album-arts/death-bed.jpg')} 
              style={{ width: 320, height: 320, borderRadius: 5 }}
              />
              <View style={{alignItems:'center'}}>
              <Text>{item.title}</Text>
              <Text>{item.artist}</Text>
              </View>
              </View>
              <View style={{marginTop:100}}>

              <Controller />
              </View>
            </View>
          )}
          /> 

      </View>
      </SafeAreaView>
    )
}

export default Player
