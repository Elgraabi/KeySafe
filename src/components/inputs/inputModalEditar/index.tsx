import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { useState } from "react";

type InputProps = TextInputProps & {
  iconName: string;
  placeHolder?: string;
  defaultValue?: string;
  isPassword?: boolean; // Adiciona uma prop para identificar campos de senha
};

export default function InputModal({
  iconName,
  placeHolder,
  defaultValue,
  isPassword = false,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} color="#3C7DC3" style={styles.icon} />
      <TextInput
        style={styles.inputText}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        secureTextEntry={isPassword && !isPasswordVisible} // Altera visibilidade da senha
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIconContainer} // Estilo para posicionar o ícone do olho
        >
          <Icon
            name={isPasswordVisible ? "eye-slash" : "eye"}
            size={20}
            color="#3C7DC3"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
