import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from 'navigation/RootNavigator';
import theme from 'styles/theme';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: 'light' | 'dark';
}) {
  return (
    <NavigationContainer theme={theme[colorScheme]}>
      <RootNavigator />
    </NavigationContainer>
  );
}
