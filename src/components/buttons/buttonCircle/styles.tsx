import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        justifyContent: "center",
        marginVertical: 10,
        width: "100%",
    },
    return: {
        backgroundColor: "blue", 
        width: 40,
        height: 40,
        borderRadius: 30, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    addKeys: {
        width: 55,
        height: 54,
        position: "absolute", 
        top: 0,
        left: 0,
        backgroundColor: "#0a1e44",
        borderRadius: 27,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        width: 55,
        height: 54,
        top: 0,
        left: 0,
        backgroundColor: "#0A1F44",
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;