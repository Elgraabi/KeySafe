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
        marginBottom: 30, 
        alignItems: "center",
    }
});

export default styles;