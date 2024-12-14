// LoginScreen.tsx
import React from "react";
import { Image, Text, View, Alert } from "react-native";
import { Formik } from "formik";
import { useAuth } from "../../context/authContext"; // Certifique-se de que o caminho está correto
import Input from "../../components/inputs/input";
import styles from "./styles";
import Button from "../../components/buttons/button";
import LoginSchema from "../../validators/login"; // Importando o schema de validação
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import Checkbox from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonCircle from "../../components/buttons/buttonCircle";

type LoginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

export default function LoginScreen() {
  const { login } = useAuth();
  const navigation = useNavigation<LoginParamsList>();

  const handleLogin = async (values: {
    username: string;
    password: string;
    keepConnected: boolean;
  }) => {
    try {
      // Obtenha os usuários cadastrados do AsyncStorage
      const existingUsers = await AsyncStorage.getItem("users");
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      // Verifique se o usuário existe e a senha está correta
      const user = users.find(
        (user: any) =>
          user.username === values.username && user.password === values.password
      );

      if (user) {
        await login(values); // Função do contexto para gerenciar estado global
        navigation.navigate("DashBoard"); // Navega para a Dashboard
      } else {
        Alert.alert("Erro", "Usuário ou senha inválidos.");
      }
    } catch (error) {
      Alert.alert("Login", "Erro ao tentar fazer login.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/imagens/logo.png")}
      />

      <View style={styles.viewText}>
        <Text style={styles.textTitle}>KeySafe</Text>
        <Text style={styles.textTitleL}>Login</Text>
      </View>

      {/* Botão de retorno */}
      <ButtonCircle
        className="return"
        iconName="arrow-left"
        onPress={() => navigation.goBack()}
      />

      <Formik
        initialValues={{ username: "", password: "", keepConnected: false }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <View>
            <Input
              title="Usuário"
              iconName="user"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <Input
              title="Senha"
              iconName="lock"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Checkbox para manter conectado */}
            <View style={styles.checkboxContainer}>
              <Checkbox
                value={values.keepConnected}
                onValueChange={(newValue) =>
                  setFieldValue("keepConnected", newValue)
                }
              />
              <Text style={styles.label}>Manter conectado</Text>
            </View>

            <View style={styles.boxButto}>
              <Button
                title="Entrar"
                className="enter"
                onPress={() => handleSubmit()}
              />
              <Button
                title="Esqueceu sua senha?"
                className="forgotYourPassword"
                onPress={() => navigation.navigate("RecoverPassword")}
              />
              <Button
                title="Cadastrar"
                className="register"
                onPress={() => navigation.navigate("RegisterUser")}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
