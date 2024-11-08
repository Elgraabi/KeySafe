import { View, Image, Text, TextInputProps } from "react-native";
import styles from "./style";
import Button from "../../components/buttons/button";

type InputProps = TextInputProps & {
    title: string
}

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../../../assets/imagens/logo.png")} />
            <Text style={styles.textTitle}>
                Hello!
            </Text>
            <Text style={styles.textP}>
                Seja bem-vido ao KeySafe
            </Text>
            <Button title="Login" className="loading"></Button>
        </View>
    )
}