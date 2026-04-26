import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import Home from '../screens/HomeScreen';

import SendParcel from '../screens/SendParcelScreen';
import Confirmation from '../screens/ConfirmationScreen';
import Track from '../screens/TrackParcelScreen';
import ParcelDetails from '../screens/ParcelDetailsScreen';
import MyParcels from '../screens/MyParcelsScreen';
import Notifications from '../screens/NotificationsScreen';
import Profile from '../screens/ProfileScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="SendParcel" component={SendParcel}/>
      <Stack.Screen name="Confirmation" component={Confirmation}/>
      <Stack.Screen name="Track" component={Track}/>
      <Stack.Screen name="ParcelDetails" component={ParcelDetails}/>
      <Stack.Screen name="MyParcels" component={MyParcels}/>
      <Stack.Screen name="Notifications" component={Notifications}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
}