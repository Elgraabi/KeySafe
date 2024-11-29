import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    width: "90%",
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    marginBottom: 10,
  },
  button: {
    width: 40,
    height: 30,
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#274BDB",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#6B7280",
  },
  buttonRow: {
    marginRight: 100, marginLeft: 100, flexDirection: "row", justifyContent: "space-between" 
  },
  saveButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#274BDB",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#DC2626",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
