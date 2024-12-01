import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#87CEFA",
  },
  image: {
    width: 70,
    height: 70,
    marginTop: 20,
    marginBottom: 20,
  },
  viewText: {
    marginBottom: 30,
    alignItems: "center",
  },
  viewTitle: {
    marginBottom: 30,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 2,
  },
  textText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -10,
  },
  inputContainer: {
    width: "100%",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonAlterar: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    color: "#124DBC",
  },
  buttonEdit: {
    backgroundColor: "#124DBC",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButtonContainer: {
    position: "absolute", // Para fixar o botão na parte inferior
    bottom: -200, // Distância do final da tela
    alignSelf: "center", // Centraliza o botão horizontalmente
    width: "90%", // Largura opcional para alinhar melhor
    margin: 10,
    justifyContent: "center",
  },

  buttonExcluir: {
    backgroundColor: "#C50F1F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row", // Alinha os botões verticalmente
    justifyContent: "space-around",
    alignItems: "center",
  },
});
export default styles;
