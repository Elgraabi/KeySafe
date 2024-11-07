import { Image, Text, View } from "react-native";
import Input from "../../components/inputs/input";
import styles from "./styles";
import ButtonCircle from "../../components/buttons/buttonCircle";
import Button from "../../components/buttons/button";

export default function RecoverPassword() {
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
            <Input title="Usuário" iconName="user"></Input>
            <Input title="Senha" iconName="lock"></Input>
            <Input title="Confirma senha" iconName="lock"></Input>
            <Button title="Confirmar" className="confirm" />
        </View>
    )
}