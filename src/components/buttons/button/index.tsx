import { View, Text, TouchableOpacityProps, TouchableOpacity } from "react-native";
import styles from "./styles";

type StyleKeys = 'loading' | 'return' | 'enter' 
| 'forgotYourPassword' | 'register' | 'confirm' | 'cancel' | 'registerUser';

type ButtonProps = TouchableOpacityProps & {
    title?: string;
    className: StyleKeys;
}

export default function Button({ title, className, ...rest }: ButtonProps) {
    let styleText;

    if (className === 'forgotYourPassword') {
        styleText = { ...styles.forgotText };
    } else if (className === 'register') {
        styleText = { ...styles.forgotText };
    } else if (className === 'registerUser') {
        styleText = { ...styles.registerUserText };
    } else {
        styleText = { ...styles.buttonText };
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles[className], styles.button]} {...rest}>
                <Text style={styleText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
