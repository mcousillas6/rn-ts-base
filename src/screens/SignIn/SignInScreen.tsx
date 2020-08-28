import React from 'react';
import { Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';
import localization from 'localization';
import textStyles from 'styles/textStyles';
import useThemeColors from 'hooks/useThemeColors';

const SigInScreen: React.FC = () => {
  const colors = useThemeColors();
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView>
        <Text style={[textStyles.title, { color: colors.text }]}>
          {localization.welcomeMessage}
        </Text>
        <TextInput mode="outlined" placeholder="Email" />
        <TextInput mode="outlined" placeholder="password" secureTextEntry />
        <Button mode="contained" onPress={() => null} style={styles.button}>
          <Text style={textStyles.fieldTitle}>Sign in</Text>
        </Button>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SigInScreen;
