import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";

type EditProfileParamsList = NativeStackNavigationProp<RoutesParams, "EditProfile">;

export default function EditProfileScreen() {
    const navigation = useNavigation<EditProfileParamsList>();

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../../assets/imagens/logo.png")}
            />
        </View>
    );
}
