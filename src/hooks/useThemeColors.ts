import useColorScheme from './useColorScheme';
import theme from 'styles/theme';

export default () => {
  const scheme = useColorScheme();

  return theme[scheme].colors;
};
