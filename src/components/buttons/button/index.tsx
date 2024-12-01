import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

<<<<<<< HEAD
type StyleKeys =
  | "loading"
  | "return"
  | "enter"
  | "forgotYourPassword"
  | "register"
  | "confirm"
  | "cancel"
  | "registerUser"
  | "save"
  | "delet"
  | "alterar"
  | "edit";
=======
type StyleKeys = 'loading' | 'return' | 'enter' 
| 'forgotYourPassword' | 'register' | 'confirm' | 'cancel' | 'registerUser' | 'save' | 'delet' | 'cancelModal';
>>>>>>> 9d146c6daee974c757aae6b72518370be1dc9151

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  className: StyleKeys;
};

export default function Button({ title, className, ...rest }: ButtonProps) {
  let styleText;

<<<<<<< HEAD
  if (className === "forgotYourPassword") {
    styleText = { ...styles.forgotText };
  } else if (className === "register") {
    styleText = { ...styles.forgotText };
  } else if (className === "registerUser") {
    styleText = { ...styles.registerUserText };
  } else if (className === "save") {
    styleText = { ...styles.saveButtonText };
  } else if (className === "delet") {
    styleText = { ...styles.deletButtonText };
  } else if (className === "alterar") {
    styleText = { ...styles.alterarButtonText };
  } else {
    styleText = { ...styles.buttonText };
  }
=======
    if (className === 'forgotYourPassword') {
        styleText = { ...styles.forgotText };
    } else if (className === 'register') {
        styleText = { ...styles.forgotText };
    } else if (className === 'registerUser') {
        styleText = { ...styles.registerUserText };
    } else if (className === 'save') {
        styleText = { ...styles.saveButtonText };
    } else if (className === 'delet') {
        styleText = { ...styles.deletButtonText };
    } else if (className === 'cancelModal') {
        styleText = { ...styles.textCancelModal};
    } else {
        styleText = { ...styles.buttonText };
    }
>>>>>>> 9d146c6daee974c757aae6b72518370be1dc9151

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles[className], styles.button]} {...rest}>
        <Text style={styleText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
