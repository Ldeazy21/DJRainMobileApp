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

const Menu = ({ navigation }) => {
  const drawer = createDrawerNavigator();
  const list = [
    { title: "ABOUT DJ RAIN",name:'About' },
    { title: "MIXES",name:'Home' },
    { title: "EVENTS",name:'Events' },
    { title: "PHOTOS",name:'Photos' },
    // { title: "BUY DJ RAIN MERCH" },
    { title: "ARTISTS OF THE MONTH",name:'Spotlight' },
  ];
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",

      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <MaterialIcons name="menu" size={26} color='#003e95'/>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={26} color='#003e95'/>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../img/djrain.png")} />
      {list.map((item, i) => (
      

        <List item={item} navigation={navigation} />
        
      ))}


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
export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003e95",
    ...StyleSheet.absoluteFillObject,
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
    bottom: 100,
    flex: 1,
  },
  frontImage: {
    width: "100%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
});
