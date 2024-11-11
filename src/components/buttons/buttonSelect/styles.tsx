import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        alignItems: "flex-start",
        paddingRight: 125,
      },
      switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10, 
      },
      switch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.0 }], 
      },
      text: {
        fontWeight: "600",
      },
});

export default styles;