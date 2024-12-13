import React, { useState } from "react";
import { Alert, Modal, Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import ButtonCircle from "../../buttons/buttonCircle";
import InputModal from "../../inputs/inputModal";
import Button from "../../buttons/button";
import * as Clipboard from "expo-clipboard";
import InputModalNovaSenha from "../../inputs/inputModalNovaSenh";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Data = {
  title: string;
  createdAt: string;
  id: string;
  username: string;
  password: string;
};

type CardProps = {
  data: Data;
  onDelete: () => void;
};

export default function Card({ data, onDelete }: CardProps) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const copyToClipboard = (text: string) => {
    Clipboard.setStringAsync(text);
    Alert.alert(
      "Copiado",
      "O e-mail foi copiado para a área de transferência."
    );
  };

  const handleSave = async () => {
    if (!editedData.title || !editedData.username || !editedData.password) {
      Alert.alert("Erro", "Título, username e senha são obrigatórios.");
      return;
    }

    try {
      const storedPasswords = await AsyncStorage.getItem("passwords");
      const passwords = storedPasswords ? JSON.parse(storedPasswords) : [];

      // Atualiza ou adiciona a senha no AsyncStorage
      const updatedPasswords = passwords.map((item: Data) =>
        item.id === editedData.id ? editedData : item
      );

      if (!updatedPasswords.find((item: Data) => item.id === editedData.id)) {
        updatedPasswords.push(editedData);
      }

      await AsyncStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      Alert.alert("Sucesso", "Senha salva com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar a senha.");
    }
  };

  const handleDelete = async () => {
    try {
      const storedPasswords = await AsyncStorage.getItem("passwords");
      const passwords = storedPasswords ? JSON.parse(storedPasswords) : [];

      const updatedPasswords = passwords.filter(
        (item: Data) => item.id !== data.id
      );
      await AsyncStorage.setItem("passwords", JSON.stringify(updatedPasswords));

      Alert.alert("Sucesso", "Senha excluída com sucesso!");
      onDelete();
      setVisibleModal(false); // Fecha o modal após excluir
    } catch (error) {
      Alert.alert("Erro", "Não foi possível excluir a senha.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.button}>
        <Pressable onPress={() => setVisibleModal(true)}>
          <FontAwesome name="angle-double-right" size={24} color="black" />
        </Pressable>
      </View>

      {/* Modal detalhes da senha*/}
      <Modal
        visible={visibleModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisibleModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                margin: 30,
                marginRight: 130,
              }}
            >
              <ButtonCircle
                className="return"
                iconName="arrow-left"
                onPress={() => setVisibleModal(false)}
              />
              <Text style={styles.modalTitle}>Detalhes da senha</Text>
            </View>

            {/* Input para o título */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                defaultValue={editedData.title}
                onChangeText={(text) =>
                  setEditedData({ ...editedData, title: text })
                }
              ></InputModal>
            </View>

            {/* Input para o username */}
            <View style={styles.inputContainer}>
              <InputModalNovaSenha
                iconName="clipboard"
                defaultValue={editedData.username}
                onIconPress={() => copyToClipboard(editedData.username)}
                onChangeText={(text) =>
                  setEditedData({ ...editedData, username: text })
                }
              ></InputModalNovaSenha>
            </View>

            {/* Input para a senha */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                defaultValue={editedData.password}
                secureTextEntry={true}
                onChangeText={(text) =>
                  setEditedData({ ...editedData, password: text })
                }
              ></InputModal>
            </View>

            {/* Botões */}
            <View style={styles.buttonRow}>
              <Button title="Salvar" className="save" onPress={handleSave} />
              <Button
                title="Excluir"
                className="delet"
                onPress={handleDelete}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
