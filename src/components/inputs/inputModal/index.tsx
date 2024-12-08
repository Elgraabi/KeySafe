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
  iconName: string;
  placeHolder?: string;
  defaultValue?: string;
  secureTextEntry?: boolean;
};

export default function InputModal({
  iconName,
  placeHolder,
  defaultValue,
  secureTextEntry = false,
  ...rest
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        secureTextEntry={!isPasswordVisible && secureTextEntry}
        {...rest}
      />
      <Icon name={iconName} size={20} color="#3C7DC3" />
      {secureTextEntry && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon
            name={isPasswordVisible ? "eye" : "eye-slash"}
            size={20}
            color="#3C7DC3"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
