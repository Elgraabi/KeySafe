import { Alert, FlatList, Image, Modal, Text, View } from "react-native";
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
  const [searchText, setSearchText] = useState(""); // Estado para o texto de busca
  const [filteredKeys, setFilteredKeys] = useState(keys); // Estado para itens filtrados

  // Estado para armazenar senhas cadastradas
  const [savedPasswords, setSavedPasswords] = useState<Data[]>(keys); // Inicializa com dados de exemplo (mock)

  // Estados para a modal de nova senha
  const [title, setTitle] = useState(""); // Título da nova senha
  const [username, setUsername] = useState(""); // Nome de usuário/email
  const [password, setPassword] = useState(""); // Senha
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirmar senha

  // Função para filtrar os dados
  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = keys.filter((key) =>
      key.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredKeys(filtered);
  };

  // Função para lidar com o salvamento da nova senha
  const handleSaveNewPassword = () => {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    if (title === "" || username === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    // Criar um novo objeto para a senha cadastrada
    const newPassword: Data = {
      id: new Date().toString(), // Geração de ID único
      title,
      username,
      password,
      createdAt: new Date().toISOString(),
    };

    // Atualiza o estado com a nova senha
    setSavedPasswords((prevPasswords) => [...prevPasswords, newPassword]);

    // Fechar a modal após salvar
    setVisibleModal(false);

    // Limpar os campos da modal
    setTitle("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

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

      <Text style={styles.textP}>KeySafe</Text>

      {/* Campo de busca */}
      <Input
        title="Pesquisar senha"
        iconName="search"
        value={searchText}
        onChangeText={handleSearch}
      />

      <Text style={styles.textTitleL}>Minhas senhas</Text>

      <View style={styles.container}>
        <FlatList
          data={filteredKeys}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View id={item.id.toString()}>
              <Card
                data={{
                  ...item,
                  id: item.id.toString(),
                }}
              />
            </View>
          )}
        />
        <View style={styles.floatingButton}>
          <ButtonCircle
            className="addKeys"
            iconName="plus"
            onPress={() => setVisibleModal(true)}
          />
        </View>
      </View>

      {/* Modal nova senha */}
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
                margin: 20,
                marginRight: 179,
                justifyContent: "space-between",
              }}
            >
              <ButtonCircle
                className="return"
                iconName="arrow-left"
                onPress={() => setVisibleModal(false)} // Fecha a modal ao pressionar o ícone de voltar
              />
              <Text style={styles.modalTitle}>Nova senha</Text>
            </View>

            {/* Input para o título */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                placeHolder="Título"
                value={title}
                onChangeText={setTitle}
              />
            </View>

            {/* Input para o username */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                placeHolder="E-mail"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            {/* Input para a senha */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                placeHolder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>

            {/* Input para a confirmar senha */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                placeHolder="Confirmar senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
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
                onPress={handleSaveNewPassword}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
