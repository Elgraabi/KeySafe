import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const global = StyleSheet.create({
    text: {
        color: theme.light.text,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        marginTop: 10,
        fontFamily: 'Text',
    },
    title: {
        color: theme.light.text,
        fontSize: 20,
        fontFamily: 'Title',
    },
    container: {
        flex: 1,
        width: '100%',                      // Largura total da tela
        paddingHorizontal: 20,              // Espaçamento nas laterais
        marginTop: 40,
        backgroundColor: theme.light.background // Cor de fundo, vinda do tema
    }
});

export default global