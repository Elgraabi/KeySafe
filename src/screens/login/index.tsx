import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import ButtonCircle from "../../components/buttons/buttonCircle";
import ButtonSelect from "../../components/buttons/buttonSelect";
import Button from "../../components/buttons/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import { validatePassword } from "../../services/security"; // Função para validar senha
import { getPassword } from "../../services/storage"; // Função para obter senha armazenada

type LoginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<LoginParamsList>();

  // Estados para armazenar entrada do usuário
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Função para lidar com o login
  const handleLogin = async () => {
    try {
      // Recuperar a senha armazenada pelo nome de usuário
      const storedHashedPassword = await getPassword(username);

      if (!storedHashedPassword) {
        Alert.alert("Erro", "Usuário não encontrado!");
        return;
      }

      // Validar a senha inserida com o hash armazenado
      const isPasswordValid = await validatePassword(
        password,
        storedHashedPassword
      );

      if (isPasswordValid) {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("DashBoard");
      } else {
        Alert.alert("Erro", "Senha incorreta!");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao realizar o login.");
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

      <ButtonCircle
        className="return"
        iconName="arrow-left"
        onPress={() => navigation.navigate("Welcome")}
      />

      <Input
        title="Usuário"
        iconName="user"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        title="Senha"
        iconName="lock"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <ButtonSelect />

      <Button title="Entrar" className="enter" onPress={handleLogin} />
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
  );
}
