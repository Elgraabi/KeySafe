import { View, Text, TouchableOpacityProps, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';

type StyleKeys = 'loading' | 'return' | 'enter' | 'forgotYourPassword';

type ButtonProps = TouchableOpacityProps & {
    title?: string;
    className: StyleKeys;
}

export default function Button({ title, className, ...rest }: ButtonProps) {
    const styleText = className === 'forgotYourPassword' 
        ? [styles.forgotText] 
        : [styles.buttonText];

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles[className], styles.button]} {...rest}>
                <Text style={styleText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
