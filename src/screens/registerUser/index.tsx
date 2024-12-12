import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import Button from "../../components/buttons/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RegisterUserParamsList = NativeStackNavigationProp<RoutesParams, "RegisterUser">;

export default function RegisterUserScreen() {
    const navigation = useNavigation<RegisterUserParamsList>();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        if (!name || !username || !password || !confirmPassword) {
            Alert.alert("Erro", "Todos os campos são obrigatórios.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        try {
            const newUser = { name, username, password };
            const existingUsers = await AsyncStorage.getItem("users");
            const users = existingUsers ? JSON.parse(existingUsers) : [];

            const userExists = users.some((user: any) => user.username === username);
            if (userExists) {
                Alert.alert("Erro", "Nome de usuário já está em uso.");
                return;
            }

            // Adiciona o novo usuário à lista de usuários
            users.push(newUser);

            // Salva a lista de usuários no AsyncStorage
            await AsyncStorage.setItem("users", JSON.stringify(users));

            Alert.alert("Sucesso", "Usuário cadastrado com sucesso!", [
                { text: "OK", onPress: () => navigation.goBack() },
            ]);
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao cadastrar o usuário. Tente novamente.");
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
                <Text style={styles.textTitle}>Cadastrar Usuário</Text>
            </View>

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
                title="Confirme a Senha"
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
