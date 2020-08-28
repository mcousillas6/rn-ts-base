import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigInScreen from 'screens/SignIn';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Root" component={SigInScreen} />
    </Stack.Navigator>
  );
}
