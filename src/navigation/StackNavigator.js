import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AdminDashboardScreen,
  AuthChoiceScreen,
  AdminLoginScreen,
  AdminParcelDetailsScreen,
  ConfirmationScreen,
  HomeScreen,
  LoginScreen,
  MyParcelsScreen,
  NotificationsScreen,
  ParcelDetailsScreen,
  ParcelListScreen,
  ProfileScreen,
  QRScannerScreen,
  SendParcelScreen,
  SignupScreen,
  SplashScreen,
  TrackParcelScreen,
  UpdateStatusScreen,
} from '../screens/DesignScreens';

import WhoAreYouScreen from '../screens/WhoAreYouScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="AuthChoice" component={WhoAreYouScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SendParcel" component={SendParcelScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen name="Track" component={TrackParcelScreen} />
      <Stack.Screen name="ParcelDetails" component={ParcelDetailsScreen} />
      <Stack.Screen name="MyParcels" component={MyParcelsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
      <Stack.Screen name="ParcelList" component={ParcelListScreen} />
      <Stack.Screen name="AdminParcelDetails" component={AdminParcelDetailsScreen} />
      <Stack.Screen name="UpdateStatus" component={UpdateStatusScreen} />
      <Stack.Screen name="QRScanner" component={QRScannerScreen} />
    </Stack.Navigator>
  );
}