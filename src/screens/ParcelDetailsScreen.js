import React from 'react';
import { View, Text } from 'react-native';

export default function ParcelDetails({ route }) {
  return (
    <View style={{ padding:20 }}>
      <Text>ID: {route.params.id}</Text>
      <Text>Status: In Transit</Text>
      <Text>Route: Mumbai → Bangalore</Text>
    </View>
  );
}