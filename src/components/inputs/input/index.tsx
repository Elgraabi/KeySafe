import { Text, TextInput, TextInputProps, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";

type InputProps = TextInputProps & {
    title: string;
    iconName?: string;
};

export default function Input({ title, iconName, ...rest }: InputProps) {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <View style={styles.inputContainer}>
                {iconName && (
                    <Icon name={iconName} size={20} style={styles.icon} />
                )}
                <TextInput style={styles.input} {...rest} />
            </View>
        </View>
    );
}
