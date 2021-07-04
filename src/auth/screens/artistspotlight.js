import React, { useLayoutEffect, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity>
            {/* <MaterialIcons name="settings" size={26} color='#003e95'/> */}
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
      <Image
          style={styles.image}
          source={require("../../img/aboutheader.png")}
        />
      </View>
      <View style={styles.aboutArea}><Text style={styles.headerTitle}>Artists Spotlight</Text></View>
       <View style={styles.scroll}>
            <Text style={styles.description}>DJ Cassidy has been at the nexus of music, fashion, and nightlife for over half his living years as the go-to deejay for music impresarios, entertainment moguls, fashion icons, cultural trendsetters, and even world leaders. When President Obama wanted a deejay for both of his Inaugurations and his fiftieth birthday party at the White House, there's only one person he called. 
            </Text> 
       </View>
      </View>
  );
};
export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001B40",
    flexDirection: "column",
    flex:1
    // ...StyleSheet.absoluteFillObject,
  },
  aboutArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 50,
  },
  headerTitle: {
    // position: "relative",
    fontSize: 28,
    backgroundColor: "#001B40",
    // position:"absolute",
    color: "#3EB3E8",
    // alignSelf: "center",
    // justifyContent: "center",
    fontWeight: "600",
    // flex:1,
    padding: 20,
  },
  scroll: {
    // top: 220,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 22,
    color: "white",
    padding: 20,
    lineHeight: 32,
  },
  list: {
    backgroundColor: "transparent",
  },
  image: {
    position: "absolute",
    backgroundColor: "red",
    width: "100%",
    height: 200,
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
