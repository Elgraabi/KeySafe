import React from "react";
import { Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import ButtonCircle from "../../components/buttons/buttonCircle";
import Button from "../../components/buttons/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";

// Definindo o tipo de parâmetro de navegação para a rota "RecoverPassword"
type RecoverPasswordParamsList = NativeStackNavigationProp<RoutesParams, "RecoverPassword">;

export default function RecoverPasswordScreen() {
    const navigation = useNavigation<RecoverPasswordParamsList>();

    return (
        <View style={styles.container}>
            {/* Imagem do logo */}
            <Image
                style={styles.image}
                source={require("../../../assets/imagens/logo.png")}
            />

            {/* Títulos da tela */}
            <Text style={styles.textTitle}>KeySafe</Text>
            <Text style={styles.textTitle}>Recuperar Senha</Text>

            {/* Botão de retorno */}
            <ButtonCircle
                className="return"
                iconName="arrow-left"
                onPress={() => navigation.goBack()}
            />

            {/* Campos de entrada para usuário e senha */}
            <Input title="Usuário" iconName="user" />
            <Input title="Nova Senha" iconName="lock" secureTextEntry={true} />
            <Input title="Confirme a Senha" iconName="lock" secureTextEntry={true} />

            {/* Botão de confirmação */}
            <View style={styles.view}>
                <Button
                    title="Confirmar"
                    className="confirm"
                    onPress={() => console.log("Senha redefinida com sucesso")}
                />
            </View>
        </View>
    );
}
