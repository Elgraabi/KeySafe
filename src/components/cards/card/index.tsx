import React, { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import ButtonCircle from "../../buttons/buttonCircle";

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
                        <View style={{alignItems: "center", flexDirection: "row", margin: 30, marginRight: 130}}>
                            <ButtonCircle
                                className="return"
                                iconName="arrow-left"
                                onPress={() => setVisibleModal(false)}
                            />
                            <Text style={styles.modalTitle}>Detalhes da senha</Text>
                        </View>

                        {/* Input para o título */}
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} defaultValue={data.title} />
                            <FontAwesome name="clipboard" size={20} color="#3C7DC3" />
                        </View>

                        {/* Input para o username */}
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} defaultValue={data.username} />
                            <FontAwesome name="eye" size={20} color="#3C7DC3" />
                        </View>

                        {/* Input para a senha */}
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} defaultValue={data.password} />
                            <FontAwesome name="clipboard" size={20} color="#3C7DC3" />
                        </View>

                        {/* Botões */}
                        <View style={styles.buttonRow}>
                            <Pressable style={styles.saveButton}>
                                <Text style={styles.saveButtonText}>Salvar</Text>
                            </Pressable>
                            <Pressable style={styles.deleteButton}>
                                <Text style={styles.deleteButtonText}>Excluir</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
