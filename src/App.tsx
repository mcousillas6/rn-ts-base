import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, DefaultTheme, ActivityIndicator, Colors } from 'react-native-paper';
import RootNavigation from 'navigation';
import useCachedResources from 'hooks/useCachedResources';
import useColorScheme from 'hooks/useColorScheme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// TODO: move this to it's own file
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};


export default function App() {
  const colorScheme = useColorScheme();
  const loadingResources = useCachedResources();

  if (loadingResources) return (
    <SafeAreaView>
      <ActivityIndicator color={Colors.blue600} animating focusable={false}/>
    </SafeAreaView>
  );

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <RootNavigation colorScheme={colorScheme} />
        <StatusBar />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
