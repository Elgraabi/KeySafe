import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import ButtonCircle from "../../buttons/buttonCircle";
import InputModal from "../../inputs/inputModal";
import Button from "../../buttons/button";

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

export default function Card({ data }: CardProps) {
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.button}>
                <Pressable onPress={() => setVisibleModal(true)}>
                    <FontAwesome name="angle-double-right" size={24} color="black" />
                </Pressable>
            </View>

            {/* Modal */}
            <Modal
                visible={visibleModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setVisibleModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={{ alignItems: "center", flexDirection: "row", margin: 30, marginRight: 130 }}>
                            <ButtonCircle
                                className="return"
                                iconName="arrow-left"
                                onPress={() => setVisibleModal(false)}
                            />
                            <Text style={styles.modalTitle}>Detalhes da senha</Text>
                        </View>

                        {/* Input para o título */}
                        <View style={styles.inputContainer}>
                            <InputModal iconName="" defaultValue={data.title}></InputModal>
                        </View>

                        {/* Input para o username */}
                        <View style={styles.inputContainer}>
                            <InputModal iconName="clipboard" defaultValue={data.username}></InputModal>
                        </View>

                        {/* Input para a senha */}
                        <View style={styles.inputContainer}>
                            <InputModal iconName="eye" defaultValue={data.password}></InputModal>
                        </View>

                        {/* Botões */}
                        <View style={styles.buttonRow}>
                            <Button title="Salvar" className="save"> </Button>
                            <Button title="Excluir" className="delet" > </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
