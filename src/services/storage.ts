import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "passwords";

// Função para salvar uma senha no AsyncStorage
export const savePassword = async (id: string, hashedPassword: string) => {
  const existingData = await AsyncStorage.getItem(STORAGE_KEY);
  const passwords = existingData ? JSON.parse(existingData) : {};
  passwords[id] = hashedPassword; // Salva a senha com o ID do usuário
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(passwords));
};

// Função para buscar uma senha pelo ID
export const getPassword = async (id: string): Promise<string | null> => {
  const existingData = await AsyncStorage.getItem(STORAGE_KEY);
  const passwords = existingData ? JSON.parse(existingData) : {};
  return passwords[id] || null;
};

// Função para apagar uma senha pelo ID
export const deletePassword = async (id: string) => {
  const existingData = await AsyncStorage.getItem(STORAGE_KEY);
  const passwords = existingData ? JSON.parse(existingData) : {};
  delete passwords[id]; // Remove a senha com base no ID
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(passwords));
};
