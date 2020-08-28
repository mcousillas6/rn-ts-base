import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from 'navigation';
import useCachedResources from 'hooks/useCachedResources';
import useColorScheme from 'hooks/useColorScheme';
import LoadingIndicator from 'components/LoadingIndicator';
import theme from 'styles/theme';

export default function App() {
  const colorScheme = useColorScheme();
  const loadingResources = useCachedResources();

  if (loadingResources) return <LoadingIndicator />;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme[colorScheme]}>
        <RootNavigation colorScheme={colorScheme} />
        <StatusBar />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
