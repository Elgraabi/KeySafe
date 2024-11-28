import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";
import Button from "../../components/buttons/button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";

type WelcomeParamsList = NativeStackNavigationProp<RoutesParams, "Welcome">;

export default function WelcomeScreen() {
    const navigation = useNavigation<WelcomeParamsList>();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../../assets/imagens/logo.png")} />

            <View style={styles.viewText}>
                <Text style={styles.textTitle}>Hello!</Text>
                <Text style={styles.textP}>Seja bem-vindo ao KeySafe</Text>
            </View>
            
            <Button
                title="Login"
                className="loading"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}
