import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
function SearchInput() {
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',padding:20}}>

      <MaterialIcons
        name="search"
        size={26}
        color="#fff"
        style={styles.searchIcon}
      />

      <TextInput style={styles.search} placeholder="Seach" placeholderTextColor="white" />
        </View>
    </View>
  );
}

export default SearchInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  search: {
    backgroundColor: "#ffffff21",
    opacity:1,
    borderRadius: 5,
    width: 350,
    position: "absolute",
    paddingLeft:50,
    height:69,
    color:'white'
  },
  searchIcon:{
      
  }
});
