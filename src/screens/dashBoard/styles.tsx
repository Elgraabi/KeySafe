import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#87CEFA',
    },
    image: {
        width: 70,
        height: 70,
        marginTop: 20,
        marginBottom: 20,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 2,
        marginRight: 150,
    },
    textP: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
        fontWeight: "bold",
        marginBottom: 20,
    },
    view: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "baseline",
    },
    floatingButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    profileButton: {
        position: "absolute",
        top: 20, // Ajusta a posição superior
        right: 20, // Alinha no canto direito
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 60,
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
      logoutButton: {
        position: "absolute",
        top: 20, 
        right: 300, 
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 60,
      }
});

export default styles;