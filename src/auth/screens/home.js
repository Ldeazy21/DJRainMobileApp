


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
