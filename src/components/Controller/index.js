import React from 'react';
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Slider } from 'react-native-elements';
function Controller() {
    return (
        <View style={styles.container}>
           <View>
               <Slider value={.5}
               
                thumbStyle={{ 
                    height: 12, width: 12, backgroundColor:'blue', }}
               />
           </View>
           <View style={styles.button_section}>

<TouchableOpacity>
<MaterialCommunityIcons  name='skip-previous' size={45} color='#003e95'/>
    {/* <MaterialCommunityIcons nam="skip-previous-circle-outline" size={12}/> */}
</TouchableOpacity>
<TouchableOpacity>
<MaterialCommunityIcons  name='play-outline' size={50} color='#003e95'/>
</TouchableOpacity>
<TouchableOpacity>
<MaterialCommunityIcons name="skip-next" size={45} color='#003e95' />
</TouchableOpacity>
           </View>
           
        </View>
    )
}

export default Controller
const styles = StyleSheet.create({
    button_section: {

        
flexDirection:'row',
justifyContent:'space-around'
    }
})