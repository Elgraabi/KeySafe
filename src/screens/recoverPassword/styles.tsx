import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#87CEFA',
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
    view: {
        height: "100%",
        width: "90%",
        paddingTop: 40,
    },
    viewText: {
        marginBottom: 30, 
        alignItems: "center"
    }
});

export default styles;