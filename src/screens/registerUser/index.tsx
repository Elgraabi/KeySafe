import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import Button from "../../components/buttons/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import ButtonCircle from "../../components/buttons/buttonCircle";
import { hashPassword } from "../../services/security"; // Importar a função de criptografia
import { savePassword } from "../../services/storage"; // Importar a função de salvar a senha no AsyncStorage

type RegisterUserParamsList = NativeStackNavigationProp<
  RoutesParams,
  "RegisterUser"
>;

export default function RegisterUserScreen() {
  const navigation = useNavigation<RegisterUserParamsList>();

  // Estados para armazenar as entradas do formulário
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Função para lidar com o cadastro do usuário
  const handleRegister = async () => {
    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      // Criptografar a senha
      const hashedPassword = await hashPassword(password);

      // Salvar a senha criptografada com o nome de usuário
      await savePassword(username, hashedPassword);

      // Mostrar mensagem de sucesso
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");

      // Redirecionar para a tela de login ou outra tela
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/imagens/logo.png")}
      />

      <View style={{ marginBottom: 30, alignItems: "center" }}>
        <Text style={styles.textTitle}>KeySafe</Text>
        <Text style={styles.textTitleS}>Cadastrar Usuário</Text>
      </View>

      {/* Botão de retorno */}
      <ButtonCircle
        className="return"
        iconName="arrow-left"
        onPress={() => navigation.goBack()}
      />

      <Input
        title="Nome"
        iconName="address-card"
        value={name}
        onChangeText={setName}
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
      <Input
        title="Confirme a senha"
        iconName="lock"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.view}>
        <Button
          title="Cancelar"
          className="cancel"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Cadastrar"
          className="registerUser"
          onPress={handleRegister}
        />
      </View>
    </View>
  );
}
