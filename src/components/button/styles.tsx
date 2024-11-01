import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#124DBC", // cor do botão conforme o Figma
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: { width: 191, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 40,
    },
    buttonText: {
        color: "#FFFFFF", // cor do texto branco
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles