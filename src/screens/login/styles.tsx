import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 70,
        backgroundColor: '#87CEFA',
        paddingBottom: 50,
    },
    image: {
        width: 100, 
        height: 100,
        marginBottom: 20,
    },
    textTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    textP: {
        fontSize: 18,
        color: '#000', 
        textAlign: 'center', 
        marginBottom: 20,
    },
    viewText: {
        marginBottom: 80, 
        alignItems: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        paddingRight: 160,
    },
    label: {
        margin: 8,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 10,
        marginRight: 150,
        alignItems: "baseline",
    },
    boxButto: {
        height: "100%",
        marginTop: 60,
    }
});

export default styles;