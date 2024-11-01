import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#87CEFA', // cor de fundo azul clara
    },
    image: {
        width: 100, // ajuste conforme o necessário
        height: 100,
        marginBottom: 20,
    },
    textTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000', // cor preta para o título
        marginBottom: 10,
    },
    textP: {
        fontSize: 18,
        color: '#000', // cor preta para o texto
        textAlign: 'center', // centralizar o texto
        marginBottom: 20,
    },
});

export default styles;