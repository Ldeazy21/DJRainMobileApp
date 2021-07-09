import React, { useLayoutEffect, useEffect,useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ListItem, Icon } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import List from "../../components/List";
import { AuthContext } from "../Context/AuthContext";

const Menu = ({ navigation }) => {
  const {logout} = useContext(AuthContext)
  const drawer = createDrawerNavigator();
  const list = [
    { title: "ABOUT DJ RAIN" },
    { title: "MIXES" },
    { title: "EVENTS" },
    { title: "PHOTOS" },
    { title: "BUY DJ RAIN MERCH" },
    { title: "ARTISTS OF THE MONTH" },
  ];
  useLayoutEffect(()=>{
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
                 navigation.navigate('Home')
                }}
              >
                 <MaterialIcons name="arrow-back-ios" size={17} color='#003e95' />
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
    })
},[navigation])
return (
  <View style={styles.container}>
   
      <Image
          style={styles.image}
          source={require("../../img/aboutheader.png")}
          />
          <ScrollView>
        <View style={styles.description}>
          <Text style={styles.title}>About Dj Rain</Text>
        <Text style={styles.text}>
           DJ Cassidy has been at the nexus of music, fashion, and nightlife for over half his living years as the go-to deejay for music impresarios, entertainment moguls, fashion icons, cultural trendsetters, and even world leaders. When President Obama wanted a deejay for both of his Inaugurations and his fiftieth birthday party at the White House, there's only one person he called. When Oprah Winfrey celebrated the opening of her school in South Africa on New Years Eve, there’s only one person she called. When Jay Z needed a deejay for his wedding to Beyoncé, there's only one person he called. And when Jay, Justin Timberlake, Usher, and Robin Thicke sought out artists to join their world tours, there’s only one person they called.
          
        </Text>
        </View>
        </ScrollView>
    
     </View>
  );
};
export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001B40",
    // flexDirection: "column",
    // ...StyleSheet.absoluteFillObject,
  
  },
  image:{
    width:'100%',
    height:200
  },
  title:{
    fontSize:27,
    color:'white'
  },
  description:{
    padding:20
  },
  text:{
    color:'white',
    fontWeight:'600',
    fontSize:15,
    lineHeight:24
  }
 
});
