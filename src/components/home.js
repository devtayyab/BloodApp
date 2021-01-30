import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const imge= require('../../tayyab.jpg')
import Donors from './screens/donors'
import Request from './screens/request'
import Requestform from './screens/requestform'

const Tab = createBottomTabNavigator();

function Drawerexample() {
  return (
   
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Request') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Donors') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }
        else if (route.name === 'Requestform') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'darkblue',
      inactiveTintColor: 'gray',
    }}
  >
        <Tab.Screen name="Request" component={Request} />
        <Tab.Screen name="Donors" component={Donors} />
        <Tab.Screen name="Requestform" component={Requestform} />
      </Tab.Navigator>
   
  );
}

export default Drawerexample