import React,{useLayoutEffect,useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,FlatList,TextInput} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SearchInput from '../../components/Search';
import SongCard from '../../components/SongCard';
function Home({navigation}) {
  const [showSearchInput,setShowSearchInput] = useState(false)
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
            <View style={{ marginRight: 20, flexDirection:'row', justifyContent:'center',alignItems:'center' }}>
              <TouchableOpacity onPress={()=>setShowSearchInput(!showSearchInput)}>
                <MaterialIcons name="search" size={26} color='#003e95' />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="settings" size={26} color='#003e95'/>
              </TouchableOpacity>
            </View>
          ),
        });
      }, [navigation]);


      
      const songs  = [
      {id:Math.random(),
      artist:"Aidonia",
      name:"Bruki",
      image:'https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
      },
      {id:Math.random(),
      artist:"Konshens ft Krys",
      name:"Tulao",
      image:'https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
      },
      {id:Math.random(),
      artist:"Chris Brown ft Usher",
      name:"Party",
      image:'https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
      }
      ]
    return (
       <View style={styles.container}>
        {
          showSearchInput && <SearchInput />
        }
     
     
         <View style={{marginTop:10}}>
         <Text style={{color:'white',fontSize:22, fontWeight:'600'}}>Latest Mixes</Text>

         </View>
         <FlatList
           
           
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          
            
          keyExtractor={(item)=>item.id}
          data={songs}
          renderItem={({item})=>(
        
        <SongCard 
        song={item}
        />
          )}
          /> 



       </View>
    )
}

export default Home

const styles = StyleSheet.create({
  container:{
    
    backgroundColor: "#001B40",
    ...StyleSheet.absoluteFillObject,
    paddingRight: 26,
    paddingLeft: 26,
  },
 
})
