import React,{useContext} from "react";
import { View, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from "../../auth/Context/AuthContext";
MaterialIcons.loadFont()
function SearchInput() {
  const {toggleSearch,handleSearch} =  useContext(AuthContext)
  return (
    <View style={styles.searchContainer}>
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',padding:20,justifyContent:'space-between'}}>

      <MaterialIcons
        name="search"
        size={26}
        color="#fff"
        style={styles.searchIcon}
      />

      <TextInput style={styles.search} placeholder="Seach" placeholderTextColor="white"
      onChangeText={(text)=>{
        handleSearch(text)
      }}
      />
      <TouchableOpacity onPress={()=>{
        toggleSearch()
      }}>


      <MaterialIcons   name="close"
        size={20}
        color="#fff"
        style={styles.searchIcon}/>
      </TouchableOpacity>
        </View>
    </View>
  );
}

export default SearchInput;
const styles = StyleSheet.create({
  searchContainer: {
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
