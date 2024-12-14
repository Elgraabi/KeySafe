import React, { useEffect, useState } from "react";
import { Alert, Image, Modal, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import ButtonCircle from "../../components/buttons/buttonCircle";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";
import InputModal from "../../components/inputs/inputModal";
import InputModalEditar from "../../components/inputs/inputModalEditar";

type EditProfileParamsList = NativeStackNavigationProp<
  RoutesParams,
  "EditProfile"
>;

export default function EditProfileScreen() {
  const navigation = useNavigation<EditProfileParamsList>();
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [visibleModalDel, setVisibleModalDel] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [editData, setEditData] = useState(userData);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = {
        name: "João da Silva",
        email: "joao@gmail.com",
        password: "123456",
      };
      setUserData(user);
      setEditData(user); // Atualiza os dados para edição
    };

    fetchUserData();
  }, []);

  const handleUpdatePassword = (newPassword: string) => {
    setUserData({ ...userData, password: newPassword });
    Alert.alert("Sucesso!", "Senha atualizada com sucesso.");
    setVisibleModal(false);
  };

  const handleEditProfile = () => {
    setUserData(editData); // Salva os dados editados no estado principal
    Alert.alert("Sucesso!", "Perfil atualizado com sucesso.");
    setVisibleModalEdit(false);
  };

  const handleDeleteProfile = () => {
    Alert.alert("Confirmação", "Deseja realmente deletar este usuário?", [
      {
        text: "Cancelar",
        style: "cancel",
        onPress: () => setVisibleModalDel(false),
      },
      {
        text: "Deletar",
        style: "destructive",
        onPress: () => {
          Alert.alert("Usuário deletado", "O perfil foi deletado com sucesso.");
          setVisibleModalDel(false);
          navigation.navigate("Welcome");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/imagens/logo.png")}
      />

      <View style={styles.viewText}>
        <Text style={styles.textText}>KeySafe</Text>
      </View>

      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>Meu perfil</Text>
      </View>

      <View style={styles.row}>
        <ButtonCircle
          className="return"
          iconName="arrow-left"
          onPress={() => navigation.goBack()}
        />
      </View>
      <Input title={userData.name} iconName="user" editable={false} />
      <Input title={userData.email} iconName="envelope-o" editable={false} />
      <Input
        title={userData.password}
        iconName="lock"
        editable={false}
        secureTextEntry={!isPasswordVisible}
      />

      <View style={styles.buttons}>
        <Button
          title="Editar perfil"
          className="editarPerf"
          onPress={() => setVisibleModalEdit(true)}
          style={styles.buttonEdit} // Estilo do botão Editar perfil
        />
        {/* Botão "Excluir perfil" movido para uma nova View */}
        <View style={styles.bottomButtonContainer}>
          <Button
            title="Excluir perfil"
            className="delet"
            onPress={handleDeleteProfile}
            style={styles.buttonExcluir}
          />
        </View>

        {/* Modal editar perfil */}
        <Modal
          visible={visibleModalEdit}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setVisibleModalEdit(false)} // Fecha a modal
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
                  onPress={() => setVisibleModalEdit(false)} // Fecha a modal ao pressionar o ícone de voltar
                />
                <Text style={styles.modalTitle}>Editar perfil</Text>
              </View>

              {/* Input para o nome */}
              <View style={styles.inputContainer}>
                <InputModalEditar
                  iconName="user"
                  placeHolder="Nome completo"
                  defaultValue={userData.name}
                  onChangeText={(text) =>
                    setEditData((prev) => ({ ...prev, name: text }))
                  }
                />
              </View>

              {/* Input para o email */}
              <View style={styles.inputContainer}>
                <InputModalEditar
                  iconName="envelope-o"
                  placeHolder="E-mail"
                  defaultValue={userData.email}
                  onChangeText={(text) =>
                    setEditData((prev) => ({ ...prev, email: text }))
                  }
                />
              </View>

              {/* Input para a senha */}
              <View style={styles.inputContainer}>
                <InputModalEditar
                  iconName="lock"
                  placeHolder="Senha"
                  defaultValue={editData.password}
                  secureTextEntry={true}
                  onChangeText={(text) =>
                    setEditData((prev) => ({ ...prev, password: text }))
                  }
                />
              </View>

              {/* Botões */}
              <View style={styles.buttonRow}>
                <Button
                  title="Cancelar"
                  className="cancelModal"
                  onPress={() => setVisibleModalEdit(false)}
                />
                <Button
                  title="Salvar"
                  className="save"
                  onPress={handleEditProfile}
                />
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal excluir perfil */}
        <Modal
          visible={visibleModalDel}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setVisibleModalEdit(false)} // Fecha a modal
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
                  onPress={() => setVisibleModalDel(false)} // Fecha a modal ao pressionar o ícone de voltar
                />
                <Text style={styles.modalTitle}>Deletar usuário</Text>
              </View>

              <Text style={styles.textDel}>
                Tem certeza que deseja deletar este usuário?
              </Text>

              {/* Botões */}
              <View style={styles.buttonRow}>
                <Button title="Cancelar" className="cancel" />
                <Button
                  title="Deletar"
                  className="delet"
                  onPress={handleDeleteProfile}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
