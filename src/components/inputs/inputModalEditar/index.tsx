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
  secureTextEntry?: boolean; // Adiciona uma prop para identificar campos de senha
};
export default function InputModal({
  iconName,
  placeHolder,
  defaultValue,
  secureTextEntry = false,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} color="#0E3A8C" style={styles.icon} />
      <TextInput
        style={styles.inputText}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry && !isPasswordVisible} // Altera visibilidade da senha
        {...rest}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.eyeIconContainer} // Estilo para posicionar o ícone do olho
        >
          <Icon
            name={isPasswordVisible ? "eye-slash" : "eye"}
            size={20}
            color="#0E3A8C"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
