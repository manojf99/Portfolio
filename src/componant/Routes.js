import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from '../screens/Form';
import Home from '../screens/Home';
import Listing from '../screens/Listing';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

 const Routes=()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home'component={Home}/>
            <Stack.Screen name='Form'component={Form}/>
            <Stack.Screen name='Listing' component={Listing}/>
            <Stack.Screen name='Details' component={Details}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes;