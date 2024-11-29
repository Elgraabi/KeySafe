import { Text, TextInput, TextInputProps, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

type InputProps = TextInputProps & {
    iconName: string;
    placeHolder: string;
};

export default function InputModal({ iconName, placeHolder, ...rest }: InputProps) {
    return (
        <View style={styles.container}> 
            <TextInput 
                style={styles.inputText}
                defaultValue={placeHolder}
            />
            <Icon name={iconName} size={20} color="#3C7DC3"/>
        </View>
    );
}
