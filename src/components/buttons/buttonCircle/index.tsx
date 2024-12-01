import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

type StyleKeys = "return" | "addKeys" | "profile" | "logout";

type ButtonProps = TouchableOpacityProps & {
  iconName?: string;
  className: StyleKeys;
  title?: string;
};

export default function ButtonCircle({
  iconName,
  className,
  /*title,*/
  ...rest
}: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles[className]]} {...rest}>
        <Icon name={iconName || ""} size={20} color={"#E6ECF8"} />
        {/*<Text>{title}</Text>*/}
      </TouchableOpacity>
    </View>
  );
}
