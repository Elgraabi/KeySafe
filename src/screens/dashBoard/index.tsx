import { Alert, FlatList, Image, Modal, Text, View } from "react-native";
import styles from "./styles";
import Input from "../../components/inputs/input";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import { useNavigation } from "@react-navigation/native";
import Card from "../../components/cards/card";
import ButtonCircle from "../../components/buttons/buttonCircle";
import { useEffect, useState } from "react";
import InputModal from "../../components/inputs/inputModal";
import Button from "../../components/buttons/button";
import AsyncStorage from "@react-native-async-storage/async-storage";

type DashBoardParamsList = NativeStackNavigationProp<RoutesParams, "DashBoard">;

type Data = {
  title: string;
  createdAt: string;
  id: number; // Alterado de string para number
  username: string;
  password: string;
};

type CardProps = {
  data: Data;
};

export default function DashBoardScreen({ data }: CardProps) {
  const navigation = useNavigation<DashBoardParamsList>();

  const [newTitle, setNewTitle] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleAddPassword = async () => {
    if (!newTitle || !newUsername || !newPassword) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const newPasswordData = {
      id: Date.now(), // Ou use uuidv4()
      title: newTitle,
      username: newUsername,
      password: newPassword,
      createdAt: new Date().toISOString(),
    };

    try {
      const storedPasswords = await AsyncStorage.getItem("passwords");
      const passwordsList = storedPasswords ? JSON.parse(storedPasswords) : [];
      passwordsList.push(newPasswordData);
      await AsyncStorage.setItem("passwords", JSON.stringify(passwordsList));
      fetchPasswords(); // Atualiza a lista exibida
      setVisibleModal(false); // Fecha o modal
      setNewTitle("");
      setNewUsername("");
      setNewPassword("");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar a senha.");
    }
  };

  const [visibleModal, setVisibleModal] = useState(false);

  const [passwords, setPasswords] = useState<Data[]>([]); // Estado para as senhas
  const [filteredPasswords, setFilteredPasswords] = useState<Data[]>([]); // Senhas filtradas

  // Função para buscar senhas do AsyncStorage
  const fetchPasswords = async () => {
    try {
      const storedPasswords = await AsyncStorage.getItem("passwords");
      const parsedPasswords = storedPasswords
        ? JSON.parse(storedPasswords)
        : [];
      setPasswords(parsedPasswords);
      setFilteredPasswords(parsedPasswords); // Inicializa com todas as senhas
    } catch (error) {
      console.error("Erro ao buscar senhas:", error);
    }
  };

  // Buscar as senhas ao carregar o componente
  useEffect(() => {
    fetchPasswords();
  }, []);

  const [searchText, setSearchText] = useState(""); // Estado para o texto de busca

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = passwords.filter((password) =>
      password.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPasswords(filtered);
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
          iconName="arrow-left" // Ícone de perfil
          onPress={() => navigation.navigate("Login")} // Substitua pela navegação ou lógica desejada
        />
      </View>

      <Image
        style={styles.image}
        source={require("../../../assets/imagens/logo.png")}
      />

      <Text style={styles.textP}>KeySafe</Text>

      <Input
        title="Pesquisar senha"
        iconName="search"
        value={searchText}
        onChangeText={handleSearch}
      />

      <Text style={styles.textTitleL}>Minhas senhas</Text>

      <View style={styles.container}>
        <FlatList
          data={filteredPasswords}
          keyExtractor={(item) => item.id.toString()} // A chave é convertida para string
          renderItem={({ item }) => (
            <View id={item.id.toString()}>
              <Card data={item} onDelete={fetchPasswords} />
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

      {/* Modal */}
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
              <Text style={styles.modalTitle}>Nova senha</Text>
            </View>

            {/* Input para o título */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                placeHolder="Título"
                value={newTitle}
                onChangeText={setNewTitle}
              />
            </View>

            {/* Input para o username */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                placeHolder="Descrição"
                value={newUsername}
                onChangeText={setNewUsername}
              />
            </View>

            {/* Input para a senha */}
            <View style={styles.inputContainer}>
              <InputModal
                iconName=""
                placeHolder="Senha"
                value={newPassword}
                onChangeText={setNewPassword}
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
                onPress={handleAddPassword}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
