import React, { useState } from "react";
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
    name: "Usuário Exemplo",
    email: "usuario@email.com",
    password: "********",
  });

  const handleUpdatePassword = (newPassword: string) => {
    setUserData({ ...userData, password: newPassword });
    Alert.alert("Sucesso!", "Senha atualizada com sucesso.");
    setVisibleModal(false);
  };

  const handleEditProfile = (newName: string, newEmail: string) => {
    setUserData({ ...userData, name: newName, email: newEmail });
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
        title="Senha"
        iconName="lock"
        editable={false}
        secureTextEntry={true}
      />

      <View style={styles.buttons}>
        <Button
          title="Alterar senha"
          className="alterar"
          onPress={() => setVisibleModal(true)}
          style={styles.buttonAlterar} // Estilo do botão Alterar senha
        />
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
            onPress={() => setVisibleModalDel(true)}
            style={styles.buttonExcluir}
          />
        </View>

        {/* Modal atualizar senha */}
        <Modal
          visible={visibleModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setVisibleModal(false)} // Fecha a modal
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
                  onPress={() => setVisibleModal(false)} // Fecha a modal ao pressionar o ícone de voltar
                />
                <Text style={styles.modalTitle}>Atualizar senha</Text>
              </View>

              {/* Input para a senha */}
              <View style={styles.inputContainer}>
                <InputModal
                  iconName=""
                  placeHolder="Nova senha"
                  defaultValue=""
                  secureTextEntry={true}
                  onChangeText={(text) => handleUpdatePassword(text)}
                />
              </View>

              {/* Botões */}
              <View style={styles.buttonRow}>
                <Button
                  title="Cancelar"
                  className="cancelModal"
                  onPress={() => setVisibleModal(false)}
                />
                <Button
                  title="Salvar"
                  className="save"
                  onPress={() => handleUpdatePassword("novaSenhaExemplo")}
                />
              </View>
            </View>
          </View>
        </Modal>

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
                />
              </View>

              {/* Input para o email */}
              <View style={styles.inputContainer}>
                <InputModalEditar
                  iconName="envelope-o"
                  placeHolder="E-mail"
                  defaultValue={userData.email}
                />
              </View>

              {/* Input para a senha */}
              <View style={styles.inputContainer}>
                <InputModalEditar
                  iconName="lock"
                  placeHolder="Senha"
                  isPassword={true}
                  defaultValue=""
                  secureTextEntry={true}
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
                  onPress={() =>
                    handleEditProfile("Novo Nome", "novo@email.com")
                  }
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
