import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

type InputProps = {
  iconName: string;
  defaultValue?: string;
  placeHolder?: string;
  editable?: boolean;
  secureTextEntry?: boolean;
  onIconPress?: () => void; // Nova prop para ação ao pressionar o ícone
};

export default function InputModalNovaSenha({
  iconName,
  defaultValue,
  placeHolder,
  editable = true,
  secureTextEntry = false,
  onIconPress,
}: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        editable={editable}
        secureTextEntry={secureTextEntry}
      />
      {iconName && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} size={20} color="#3C7DC3" />
        </TouchableOpacity>
      )}
    </View>
  );
}
