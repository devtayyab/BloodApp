import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator,DrawerView } from '@react-navigation/drawer';
import { View,Text, Header, Button,Icon, TouchableOpacity, Container, } from 'native-base';
import {Image} from 'react-native'
const imge= require('../../tayyab.jpg')
import Donors from './screens/donors'
import Request from './screens/request'
import Requestform from './screens/requestform'
import { createStackNavigator } from '@react-navigation/stack';

function Home({navigation}){

    return(
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Drawerexample =({navigation})=> {
return (
    <Container>
    
          
    <Stack.Navigator>
      
         <Stack.Screen name="Request" component={Request} />
         <Stack.Screen name="Donors" component={Donors} />
         <Stack.Screen name="Requestform" component={Requestform} />
        </Stack.Navigator>
        
      </Container>
   );
}
export default Drawerexample