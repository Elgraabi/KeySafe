import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import ButtonCircle from "../../components/buttons/buttonCircle";
import Button from "../../components/buttons/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { getPassword, savePassword } from "../../services/storage"; // Importando as funções de storage
import { hashPassword } from "../../services/security"; // Importando a função de hash da senha

// Definindo o tipo de parâmetro de navegação para a rota "RecoverPassword"
type RecoverPasswordParamsList = NativeStackNavigationProp<
  RoutesParams,
  "RecoverPassword"
>;

export default function RecoverPasswordScreen() {
  const navigation = useNavigation<RecoverPasswordParamsList>();

  // Estados para armazenar os valores das entradas
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Função para lidar com a recuperação da senha
  const handleRecoverPassword = async () => {
    // Verificar se as senhas coincidem
    if (newPassword !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    try {
      // Verificar se o nome de usuário existe
      const existingHashedPassword = await getPassword(username);

      if (!existingHashedPassword) {
        Alert.alert("Erro", "Usuário não encontrado!");
        return;
      }

      // Criptografar a nova senha
      const hashedPassword = await hashPassword(newPassword);

      // Atualizar a senha no AsyncStorage
      await savePassword(username, hashedPassword);

      // Mostrar mensagem de sucesso
      Alert.alert("Sucesso", "Senha redefinida com sucesso!");

      // Navegar para a tela de login
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao redefinir a senha.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem do logo */}
      <Image
        style={styles.image}
        source={require("../../../assets/imagens/logo.png")}
      />

      {/* Títulos da tela */}
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>KeySafe</Text>
        <Text style={styles.textTitleS}>Recuperar Senha</Text>
      </View>

      {/* Botão de retorno */}
      <ButtonCircle
        className="return"
        iconName="arrow-left"
        onPress={() => navigation.goBack()}
      />

      {/* Campos de entrada para usuário e senha */}
      <Input
        title="Usuário"
        iconName="user"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        title="Nova Senha"
        iconName="lock"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Input
        title="Confirme a Senha"
        iconName="lock"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Botão de confirmação */}
      <View style={styles.view}>
        <Button
          title="Confirmar"
          className="confirm"
          onPress={handleRecoverPassword}
        />
      </View>
    </View>
  );
}
