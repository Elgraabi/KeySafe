import { Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import ButtonCircle from "../../components/buttons/buttonCircle";
import Button from "../../components/buttons/button";

export default function RegisterUser() {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={require("../../../assets/imagens/logo.png")}
            />
            <Text style={styles.textTitle}>
                KeySafe
            </Text>
            <Text style={styles.textTitle}>
                Recuperar Senha
            </Text>
            <ButtonCircle className="return" iconName="arrow-left"/>
            <Input title="Nome" iconName="address-card"></Input>
            <Input title="Usuário" iconName="user"></Input>
            <Input title="Senha" iconName="lock"></Input>
            <Input title="Confirma senha" iconName="lock"></Input>
            <View style={styles.view}>
                <Button title="Cancelar" className="cancel" />
                <Button title="Cadastrar" className="register" />
            </View>
        </View>
    )
}