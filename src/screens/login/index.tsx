import React from "react";
import { Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import ButtonCircle from "../../components/buttons/buttonCircle";
import ButtonSelect from "../../components/buttons/buttonSelect";
import Button from "../../components/buttons/button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";

type LoginParamsList = NativeStackNavigationProp<RoutesParams, "Login">;

export default function LoginScreen() {
    const navigation = useNavigation<LoginParamsList>();

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../../assets/imagens/logo.png")}
            />

            <View style={styles.viewText}>
                <Text style={styles.textTitle}>KeySafe</Text>
                <Text style={styles.textTitle}>Login</Text>
            </View>

            <ButtonCircle className="return" iconName="arrow-left" onPress={() => navigation.navigate("Welcome")}/>

            <Input title="Usuário" iconName="user" />
            <Input title="Senha" iconName="lock" secureTextEntry={true} />

            <ButtonSelect />

            <Button title="Entrar" className="enter" onPress={() => navigation.navigate("DashBoard")} />
            <Button
                title="Esqueceu sua senha?"
                className="forgotYourPassword"
                onPress={() => navigation.navigate("RecoverPassword")}
            />
            <Button title="Cadastrar" className="register" onPress={() => navigation.navigate("RegisterUser")} />
        </View>
    );
}
