// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import Signup from './src/signup'
import Signin from './src/signin'
import Drawerexample from './src/components/home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Mapp from './src/map'


const Stack = createStackNavigator();

function App() {

  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Mapp} /> */}
        <Stack.Screen name="Login" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Drawerexample} /> 
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;