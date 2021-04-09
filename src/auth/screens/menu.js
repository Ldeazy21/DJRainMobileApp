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
    { title: "ABOUT DJ RAIN" },
    { title: "MIXES" },
    { title: "EVENTS" },
    { title: "PHOTOS" },
    { title: "BUY DJ RAIN MERCH" },
    { title: "ARTISTS OF THE MONTH" },
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
      <Image style={styles.image} source={require("../../img/back.png")} />
      {list.map((item, i) => (
   
        <List title={item.title} />
      ))}

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
    paddingRight: 26,
    paddingLeft: 26,
  },
  list: {
    backgroundColor: "transparent",
  },
  image: {
    position: "absolute",
    width: 500,
    height: 844,
    left: -237,
    top: 103,
    ...StyleSheet.absoluteFillObject,
  },
  imageSection: {
    justifyContent: "center",
    alignItems: "center",
    top: 150,
  },
  frontImage: {
    width: "100%",
  
    
  },
});
