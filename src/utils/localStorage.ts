import AsyncStorage from '@react-native-community/async-storage';

const localStorage = {
  getItem: async (key: string) => {
    const data = await AsyncStorage.getItem(key);
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return data;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItem: async (key: string, value: any) => {
    let valueStr = value;
    if (typeof valueStr === 'object') {
      valueStr = JSON.stringify(value);
    }
    return AsyncStorage.setItem(key, valueStr);
  },
  removeItem: async (key: string) => {
    return AsyncStorage.removeItem(key);
  },
};

export default localStorage;
