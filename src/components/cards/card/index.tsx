import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../../navigation/routesParams";

type data = {
    title: string;
    createdAt: string;
    id: string;
    username: string;
    password: string;
}

type CardProps = {
    data: data;
}

export default function Card({ data }: CardProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RoutesParams>>();
    
    // Criar modal PasswordDetails e estilizar os CSS - dataContainer, title e separator
    return (
        <View style={styles.container}>
            <View style={styles.dataContainer}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
            <View style={styles.separator}>
                <Pressable onPress={() => navigation.navigate('PasswordDetails', {...data })}> 
                <FontAwesome name="angle-double-right" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    );
}