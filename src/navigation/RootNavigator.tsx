import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import localization from 'localization';
// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();


// TODO: remove
const DummyView = () => (
  <SafeAreaView>
    <Text>{localization.welcomeMessage}</Text>
  </SafeAreaView>
);

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Root" component={DummyView} />
    </Stack.Navigator>
  );
}
