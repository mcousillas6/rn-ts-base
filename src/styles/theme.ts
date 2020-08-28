import { DefaultTheme, Colors } from "react-native-paper";

const lightTheme = {
  ...DefaultTheme,
  colors: {
    background: Colors.white,
    surface: Colors.white,
    error: Colors.red600,
    text: Colors.black,
    onSurface: Colors.grey600,
    onBackground: Colors.grey600,
    disabled: Colors.grey900,
    placeholder: Colors.blueGrey300,
    backdrop: Colors.blueGrey300,
    notification: Colors.teal600,
    primary: Colors.blue600,
    accent: Colors.teal600,
    card: Colors.white,
    border: Colors.grey500
  },
};

const darkTheme = {
  ...DefaultTheme,
  colors: {
    background: Colors.black,
    surface: Colors.black,
    error: Colors.red600,
    text: Colors.white,
    onSurface: Colors.grey600,
    onBackground: Colors.grey600,
    disabled: Colors.grey900,
    placeholder: Colors.blueGrey300,
    backdrop: Colors.blueGrey300,
    notification: Colors.teal600,
    primary: Colors.blue600,
    accent: Colors.teal600,
    card: Colors.black,
    border: Colors.grey500
  },
}

export default { dark: darkTheme, light: lightTheme };
