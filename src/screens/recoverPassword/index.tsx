import React, { useState } from "react";
import { Image, Text, View, Alert } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import ButtonCircle from "../../components/buttons/buttonCircle";
import Button from "../../components/buttons/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Definindo o tipo de parâmetro de navegação para a rota "RecoverPassword"
type RecoverPasswordParamsList = NativeStackNavigationProp<
    RoutesParams,
    "RecoverPassword"
>;

export default function RecoverPasswordScreen() {
    const navigation = useNavigation<RecoverPasswordParamsList>();

    // Estados para capturar entradas do usuário
    const [username, setUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Lógica de redefinição de senha
    const handleResetPassword = async () => {
        if (!username || !newPassword || !confirmPassword) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        if (newPassword !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        try {
            // Busca os usuários cadastrados no AsyncStorage
            const existingUsers = await AsyncStorage.getItem("users");
            const users = existingUsers ? JSON.parse(existingUsers) : [];

            // Verifica se o usuário existe
            const user = users.find((user: any) => user.username === username);

            if (!user) {
                Alert.alert("Erro", "Usuário não encontrado.");
                return;
            }

            // Atualiza a senha do usuário encontrado
            user.password = newPassword;

            // Salva a lista de usuários novamente no AsyncStorage
            await AsyncStorage.setItem("users", JSON.stringify(users));

            Alert.alert("Sucesso", "Senha redefinida com sucesso!");
            navigation.goBack(); // Retorna à tela anterior
        } catch (e) {
            console.error("Erro ao redefinir senha:", e);
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
                <Text style={styles.textTitle}>Recuperar Senha</Text>
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
                    onPress={handleResetPassword}
                />
            </View>
        </View>
    );
}
