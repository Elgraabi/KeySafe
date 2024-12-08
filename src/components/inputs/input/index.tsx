import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { useState } from "react";

type InputProps = TextInputProps & {
  title: string;
  iconName: string;
  secureTextEntry?: boolean; // Propriedade para inputs de senha
};

export default function Input({
  title,
  iconName,
  secureTextEntry,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} color={"#022971"} />
      <TextInput
        style={styles.inputText}
        placeholder={title}
        secureTextEntry={secureTextEntry && !isPasswordVisible} // Controla a visibilidade
        {...rest}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Icon
            name={isPasswordVisible ? "eye" : "eye-slash"}
            size={20}
            color="#022971"
            style={styles.iconEye} // Adicionar margem se necessário
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
