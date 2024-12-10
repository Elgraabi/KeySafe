import { FlatList, Image, Modal, Text, View } from "react-native";
import styles from "./styles";
import Input from "../../components/inputs/input";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import keys from "../../mock/keys";
import Card from "../../components/cards/card";
import ButtonCircle from "../../components/buttons/buttonCircle";
import { useState } from "react";
import InputModal from "../../components/inputs/inputModal";
import Button from "../../components/buttons/button";

type DashBoardParamsList = NativeStackNavigationProp<RoutesParams, "DashBoard">;

type Data = {
    title: string;
    createdAt: string;
    id: string;
    username: string;
    password: string;
};

type CardProps = {
    data: Data;
};

export default function DashBoardScreen({ data }: CardProps) {
    const navigation = useNavigation<DashBoardParamsList>();
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.profileButton}>
                <ButtonCircle
                    className="profile"
                    iconName="user" // Ícone de perfil
                    onPress={() => navigation.navigate("EditProfile")} // Substitua pela navegação ou lógica desejada
                />
            </View>

            <View style={styles.logoutButton}>
                <ButtonCircle
                    className="logout"
                    iconName="sign-out" // Ícone de perfil
                    onPress={() => navigation.navigate("Login")} // Substitua pela navegação ou lógica desejada
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
                    <ButtonCircle className="addKeys" iconName="plus" onPress={() => setVisibleModal(true)} />
                </View>
            </View>

            {/* Modal */}
            <Modal
                visible={visibleModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setVisibleModal(false)} // Fecha a modal
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={{ alignItems: "center", flexDirection: "row", margin: 30, marginRight: 130 }}>
                            <ButtonCircle
                                className="return"
                                iconName="arrow-left"
                                onPress={() => setVisibleModal(false)} // Fecha a modal ao pressionar o ícone de voltar
                            />
                            <Text style={styles.modalTitle}>Nova senha</Text>
                        </View>

                        {/* Input para o título */}
                        <View style={styles.inputContainer}>
                            <InputModal iconName="" placeHolder="Título" />
                        </View>

                        {/* Input para o username */}
                        <View style={styles.inputContainer}>
                            <InputModal iconName="" placeHolder="Usuário/email" />
                        </View>

                        {/* Input para a senha */}
                        <View style={styles.inputContainer}>
                            <InputModal iconName="eye" placeHolder="Senha" defaultValue=""/>
                        </View>

                        {/* Input para a confirmar senha */}
                        <View style={styles.inputContainer}>
                            <InputModal iconName="eye" placeHolder="Confirmar senha" defaultValue=""/>
                        </View>

                        {/* Botões */}
                        <View style={styles.buttonRow}>
                            <Button title="Cancelar" className="cancelModal" />
                            <Button title="Salvar" className="save" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}