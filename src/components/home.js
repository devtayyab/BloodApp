import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator,DrawerView } from '@react-navigation/drawer';
import { View,Text, Header, Button,Icon, TouchableOpacity, Container, } from 'native-base';
import {Image} from 'react-native'
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
const Drawerexample =({navigation})=> {
return (
    <Container>
    
          
       <Drawer.Navigator>
      
         <Drawer.Screen name="Request" component={Request} />
         <Drawer.Screen name="Donors" component={Donors} />
         <Drawer.Screen name="Requestform" component={Requestform} />
         </Drawer.Navigator>
        
      </Container>
   );
}
export default Drawerexample