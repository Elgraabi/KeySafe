import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";

// Constantes de armazenamento
const STORAGE_USER_KEY = "@safekey-user";
const STORAGE_KEEP_CONNECTED_KEY = "@safekey-keepConnected";

type UserType = {
  username: string;
  name: string;
};

type LoginType = {
  username: string;
  password: string;
  keepConnected: boolean;
};

type AuthContextType = {
  isAuthenticated: boolean;
  isFirstAccess: boolean;
  keepConnected: boolean;
  user: UserType;

  login: (credentials: LoginType) => Promise<void>;
  register: (name: string, username: string, password: string) => Promise<void>;
  forgotPassword: (
    username: string,
    newPassword: string
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<void>;
  resetData: () => Promise<void>;
  editProfile: (name: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isFirstAccess: true,
  keepConnected: false,
  user: { username: "", name: "" },

  login: async () => {},
  register: async () => {},
  forgotPassword: async () => {
    return { success: false, message: "" };
  },
  logout: async () => {},
  resetData: async () => {},
  editProfile: async () => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isFirstAccess, setIsFirstAccess] = useState<boolean>(true);
  const [keepConnected, setKeepConnected] = useState<boolean>(false);
  const [user, setUser] = useState<UserType>({ username: "", name: "" });

  const loadStoredData = async () => {
    try {
      const userStored = await AsyncStorage.getItem(STORAGE_USER_KEY);
      const keepConnectedStored = await AsyncStorage.getItem(
        STORAGE_KEEP_CONNECTED_KEY
      );

      if (userStored) {
        const parsedUser: UserType = JSON.parse(userStored);
        setUser(parsedUser);
        setIsAuthenticated(true);
        setKeepConnected(keepConnectedStored === "true");
      }
    } catch (e) {
      console.log("Erro ao carregar dados armazenados:", e);
    }
  };

  useEffect(() => {
    loadStoredData();
  }, []);

  const login = async ({ username, password, keepConnected }: LoginType) => {
    try {
      const userStored = await AsyncStorage.getItem(STORAGE_USER_KEY);

      if (userStored) {
        const user: UserType = JSON.parse(userStored);

        if (username === user.username) {
          setUser(user);
          setKeepConnected(keepConnected);
          setIsAuthenticated(true);
          await AsyncStorage.setItem(
            STORAGE_KEEP_CONNECTED_KEY,
            JSON.stringify(keepConnected)
          );
        } else {
          Alert.alert("Login", "Usuário ou senha inválidos.");
        }
      } else {
        Alert.alert("Login", "Faça um cadastro primeiro.");
      }
    } catch (e) {
      Alert.alert(
        "Login",
        "Não foi possível logar. Tente novamente mais tarde."
      );
    }
  };

  const register = async (name: string, username: string, password: string) => {
    try {
      const newUser: UserType & { password: string } = {
        name,
        username,
        password,
      };
      await AsyncStorage.setItem(STORAGE_USER_KEY, JSON.stringify(newUser));
      setUser(newUser);
      setIsAuthenticated(true);
      setIsFirstAccess(false);
    } catch (e) {
      Alert.alert(
        "Cadastro",
        "Não foi possível cadastrar. Tente novamente mais tarde."
      );
    }
  };

  const forgotPassword = async (
    username: string,
    newPassword: string
  ): Promise<{ success: boolean; message: string }> => {
    try {
      const userStored = await AsyncStorage.getItem(STORAGE_USER_KEY); // Usar o mesmo local do usuário armazenado

      if (!userStored) {
        return { success: false, message: "Usuário não encontrado." };
      }

      const user: UserType & { password?: string } = JSON.parse(userStored);

      if (user.username !== username) {
        return { success: false, message: "Usuário não encontrado." };
      }

      // Atualizar senha
      user.password = newPassword;
      await AsyncStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
      return { success: true, message: "Senha redefinida com sucesso." };
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      return { success: false, message: "Erro ao redefinir senha." };
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_USER_KEY);
      await AsyncStorage.removeItem(STORAGE_KEEP_CONNECTED_KEY);
      setUser({ username: "", name: "" });
      setIsAuthenticated(false);
      setKeepConnected(false);
    } catch (e) {
      Alert.alert(
        "Logout",
        "Não foi possível sair. Tente novamente mais tarde."
      );
    }
  };

  const resetData = async () => {
    try {
      await AsyncStorage.clear();
      setUser({ username: "", name: "" });
      setIsAuthenticated(false);
      setKeepConnected(false);
    } catch (e) {
      Alert.alert("Reset", "Erro ao resetar dados.");
    }
  };

  const editProfile = async (name: string) => {
    try {
      const updatedUser = { ...user, name };
      await AsyncStorage.setItem(STORAGE_USER_KEY, JSON.stringify(updatedUser));
      setUser(updatedUser);
    } catch (e) {
      Alert.alert(
        "Perfil",
        "Não foi possível editar o perfil. Tente novamente mais tarde."
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isFirstAccess,
        keepConnected,
        user,
        login,
        register,
        forgotPassword,
        logout,
        resetData,
        editProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
