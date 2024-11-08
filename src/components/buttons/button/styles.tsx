import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        padding: 12,
        width: "80%",
    },
    loading: {
        backgroundColor: "#124DBC",
    },
    return: {
        backgroundColor: "blue", 
        width: 40,
        height: 40,
        borderRadius: 30, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    enter: {
        backgroundColor: "#124DBC",
    },
    forgotYourPassword: {

    },
    forgotText: {
        color: "black",
        fontWeight: "bold",
    },
    register: {
        
    },
    confirm: {
        backgroundColor: "#124DBC",
    },
    cancel: {
        backgroundColor: "#124DBC",
        textTransform: "none",
        borderRadius: 8,
    },
    registerUser: {
        borderColor: "#124DBC",
        backgroundColor: "#FFFFFF",
        fontWeight: "bold",
        textTransform: "none",
    },
    registerUserText: {
        color: "#124DBC",
        fontWeight: "bold",
    }
});

export default styles;
