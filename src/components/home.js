import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View,Text, Header, Button,Icon, Thumbnail } from 'native-base';
const imge= require('../../tayyab.jpg')
import Donors from './screens/donors'
import Request from './screens/request'
import Requestform from './screens/requestform'
function Home({navigation}){

    return(
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}
const Drawer = createDrawerNavigator();
const Drawerexample =()=> {
return (
  
    <Drawer.Navigator>
           {/* <Button onPress={()=>navigation.toggleDrawer()} transparent><Thumbnail source={imge}></Thumbnail></Button> */}
         <Drawer.Screen name="Home" component={Home} />
         <Drawer.Screen name="Donors" component={Donors} />
         <Drawer.Screen name="Request" component={Request} />
         <Drawer.Screen name="Requestform" component={Requestform} />
         
         
      </Drawer.Navigator>
   
   );
}
export default Drawerexample