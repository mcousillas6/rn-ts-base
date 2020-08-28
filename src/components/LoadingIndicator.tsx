import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, ActivityIndicator } from 'react-native-paper';

const LoadingIndicator: React.FC<unknown> = () => {
  return (
    <SafeAreaView>
      <ActivityIndicator color={Colors.blue600} animating focusable={false} />
    </SafeAreaView>
  );
};

export default LoadingIndicator;
