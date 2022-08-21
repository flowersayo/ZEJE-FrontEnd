import AsyncStorage from '@react-native-async-storage/async-storage';

export const STEP_COUNT = 'step_count';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    // 혹시 이부분도 key를 stringfy하게끔 수정해도 될까용
  } catch (e) {
    console.log(e);
  }
};
export const getData = async key => {
  try {
    const loadedData = await AsyncStorage.getItem(key);
    return JSON.parse(loadedData);
  } catch (e) {
    console.log(e);
  }
};
