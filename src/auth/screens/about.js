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
      <View style={styles.image}>
      <Image
          style={styles.image}
          source={require("../../img/aboutheader.png")}
        />
      </View>
      <View style={styles.aboutArea}><Text style={styles.headerTitle}>About Dj Rain</Text></View>
       <View style={styles.scroll}>
          <ScrollView>
            <Text style={styles.description}>DJ Cassidy has been at the nexus of music, fashion, and nightlife for over half his living years as the go-to deejay for music impresarios, entertainment moguls, fashion icons, cultural trendsetters, and even world leaders. When President Obama wanted a deejay for both of his Inaugurations and his fiftieth birthday party at the White House, there's only one person he called. When Oprah Winfrey celebrated the opening of her school in South Africa on New Years Eve, there’s only one person she called. When Jay Z needed a deejay for his wedding to Beyoncé, there's only one person he called. And when Jay, Justin Timberlake, Usher, and Robin Thicke sought out artists to join their world tours, there’s only one person they called.
            </Text> 
         </ScrollView>
       </View>
      </View>
  );
};
export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001B40",
    // flexDirection: "column",
    ...StyleSheet.absoluteFillObject,
  
  },
  aboutArea: {
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        paddingTop:20
  
    
    // flex: 1,
    // alignSelf: "center",
    // justifyContent: "center",
  },
  headerTitle: {
    position: "relative",
    fontSize: 28,
    backgroundColor: "#001B40",
    position:"absolute",
    color: "#ffffff",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
    top:70,
    fontWeight: "600",
    flex:1,
    padding: 20,
  },
  scroll: {
    top: 220,
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
