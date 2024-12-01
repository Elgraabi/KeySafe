import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesParams } from "../../navigation/routesParams";
import ButtonCircle from "../../components/buttons/buttonCircle";
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";

type EditProfileParamsList = NativeStackNavigationProp<
  RoutesParams,
  "EditProfile"
>;

export default function EditProfileScreen() {
  const navigation = useNavigation<EditProfileParamsList>();

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
        <Button
          title="Alterar senha"
          className="alterar"
          onPress={() => navigation.goBack()}
          style={styles.buttonAlterar} // Estilo do botão Alterar senh
        />
        <Button
          title="Editar perfil"
          className="edit"
          onPress={() => console.log("Usuário cadastrado com sucesso")}
          style={styles.buttonEdit} // Estilo do botão Editar perfil
        />

        {/* Botão "Excluir perfil" movido para uma nova View */}
        <View style={styles.bottomButtonContainer}>
          <Button
            title="Excluir perfil"
            className="delet"
            onPress={() => console.log("Usuário cadastrado com sucesso")}
            style={styles.buttonExcluir}
          />
        </View>
      </View>
    </View>
  );
}
