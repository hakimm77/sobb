import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (err) {
    return null;
  }
};

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (data !== null) {
      return data;
    } else {
      return "none";
    }
  } catch (err) {
    return null;
  }
};

export const removeData = async (item: string) => {
  try {
    await AsyncStorage.removeItem(item);
  } catch (err) {
    return null;
  }
};
