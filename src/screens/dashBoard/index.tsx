import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
import Input from "../../components/inputs/input";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import keys from "../../mock/keys";
import Card from "../../components/cards/card";

type DashBoardParamsList = NativeStackNavigationProp<RoutesParams, "DashBoard">;

export default function DashBoardScreen() {
    const navigation = useNavigation<DashBoardParamsList>();

    return (
        <View style={styles.container}>
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
                                        id: item.id.toString()}} 
                            />
                        </View>

                    )}
                />
            </View>
        </View>
    );
}