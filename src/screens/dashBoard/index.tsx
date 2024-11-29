import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import Input from "../../components/inputs/input";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import keys from "../../mock/keys";
import Card from "../../components/cards/card";
import ButtonCircle from "../../components/buttons/buttonCircle";

type DashBoardParamsList = NativeStackNavigationProp<RoutesParams, "DashBoard">;

export default function DashBoardScreen() {
    const navigation = useNavigation<DashBoardParamsList>();

    return (
        <View style={styles.container}>
            <View style={styles.profileButton}>
                <ButtonCircle
                    className="profile"
                    iconName="user" // Ícone de perfil
                    onPress={() => console.log("Ir para o perfil")} // Substitua pela navegação ou lógica desejada
                />
            </View>

            <Image
                style={styles.image}
                source={require("../../../assets/imagens/logo.png")}
            />

            <Text style={styles.textP}>
                KeySafe
            </Text>

            <Input title="Pesquisar senha" iconName="search" />

            <Text style={styles.textTitle}>
                Minhas senhas
            </Text>

            <View style={styles.container}>
                <FlatList
                    data={keys}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View id={item.id.toString()}>
                            <Card
                                data={{
                                    ...item,
                                    id: item.id.toString()
                                }}
                            />
                        </View>

                    )}
                />
                <View style={styles.floatingButton}>
                    <ButtonCircle className="addKeys" iconName="plus">

                    </ButtonCircle>
                </View>
            </View>
        </View>
    );
}