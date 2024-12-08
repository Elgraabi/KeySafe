import React, { useState } from "react";
import { Image, Modal, Text, View } from "react-native";
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

export default function EditProfileScreen({ data }: CardProps) {
  const navigation = useNavigation<EditProfileParamsList>();
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [visibleModalDel, setVisibleModalDel] = useState(false);

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
      <Input title="Nome completo" iconName="user" />
      <Input title="E-mail" iconName="envelope-o" />
      <Input title="E-mail de recuperação" iconName="envelope-o" />
      <Input title="Senha" iconName="lock" secureTextEntry={true} />

      <View style={styles.view}>
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
        </View>
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
                  marginRight: 136,
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
                  placeHolder="Senha"
                  defaultValue=""
                  secureTextEntry={true}
                />
              </View>

              {/* Input para a confirmar senha */}
              <View style={styles.inputContainer}>
                <InputModal
                  iconName=""
                  placeHolder="Confirmar senha"
                  defaultValue=""
                  secureTextEntry={true}
                />
              </View>

              {/* Botões */}
              <View style={styles.buttonRow}>
                <Button title="Cancelar" className="cancelModal" />
                <Button title="Alterar" className="alterarSenha" />
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
                  margin: 20,
                  marginRight: 179,
                  justifyContent: "space-between",
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
                  defaultValue=""
                />
              </View>

              {/* Input para o email */}
              <View style={styles.inputContainer}>
                <InputModalEditar
                  iconName="envelope-o"
                  placeHolder="E-mail"
                  defaultValue=""
                />
              </View>

              {/* Input para confirmar email */}
              <View style={styles.inputContainer}>
                <InputModalEditar
                  iconName="envelope-o"
                  placeHolder="E-mail de confirmação"
                  defaultValue=""
                />
              </View>

              {/* Input para a senha */}
              <View style={styles.inputContainer}>
                <InputModalEditar
                  iconName="lock"
                  placeHolder="Senha"
                  isPassword={true}
                />
              </View>

              {/* Botões */}
              <View style={styles.buttonRow}>
                <Button title="Cancelar" className="cancelModal" />
                <Button title="Alterar" className="alterarSenha" />
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
                <Button title="Cancelar" className="cancelModal" />
                <Button title="Deletar" className="delet" />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
