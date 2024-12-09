import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    width: "100%",
    height: 40,
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 30,
    borderRadius: 12,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderColor: "#E5E7EB",
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  eyeIconContainer: {
    marginLeft: 15, // Espaçamento entre o campo de texto e o ícone do olho
    marginRight: -15,
  },
  inputText: {
    flex: 10,
    fontWeight: "bold",
    color: "#828385",
  },
});

export default styles;
