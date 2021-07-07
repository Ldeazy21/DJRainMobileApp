import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'

import Home from '../auth/screens/home';
import About from '../auth/screens/about'
import Menu from '../auth/screens/menu';
import Photos from '../auth/screens/photos';
import Spotlight from '../auth/screens/artists';

import Events from '../auth/screens/events';

import Mixes from '../auth/screens/mixes';
const Drawer = createDrawerNavigator();

const Main = ()=>{
return(
    <Drawer.Navigator
    
//     drawerContent={(props)=> <Menu {...props}
    
//     />

// }
    >
        <Drawer.Screen name="Home"  component={Home}     />
        
        <Drawer.Screen name="About" component={About} />
     
        <Drawer.Screen name="Mixes" component={Mixes} />
        <Drawer.Screen name="Events" component={Events} />
        <Drawer.Screen name="Photos" component={Photos} />
        <Drawer.Screen name="Spotlight" component={Spotlight} />
    
    </Drawer.Navigator>

)
}

export default Main;