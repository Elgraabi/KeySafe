import React from "react";
import { Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import ButtonCircle from "../../components/buttons/buttonCircle";
import Button from "../../components/buttons/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";

type RegisterUserParamsList = NativeStackNavigationProp<RoutesParams, "RegisterUser">;

export default function RegisterUserScreen() {
    const navigation = useNavigation<RegisterUserParamsList>();

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../../assets/imagens/logo.png")}
            />

            <Text style={styles.textTitle}>KeySafe</Text>
            <Text style={styles.textTitle}>Cadastrar Usuário</Text>

            <ButtonCircle
                className="return"
                iconName="arrow-left"
                onPress={() => navigation.goBack()}
            />

            <Input title="Nome" iconName="address-card" />
            <Input title="Usuário" iconName="user" />
            <Input title="Senha" iconName="lock" secureTextEntry={true} />
            <Input title="Confirme a Senha" iconName="lock" secureTextEntry={true} />

            <View style={styles.view}>
                <Button
                    title="Cancelar"
                    className="cancel"
                    onPress={() => navigation.goBack()}
                />
                <Button
                    title="Cadastrar"
                    className="registerUser"
                    onPress={() => console.log("Usuário cadastrado com sucesso")}
                />
            </View>
        </View>
    );
}
