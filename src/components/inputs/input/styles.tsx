import { StyleSheet } from "react-native";
import { theme } from "../../../../theme"; 

const styles = StyleSheet.create({
    container: {
        marginBottom: 16, 
    },
    inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderWidth: 1, 
        borderColor: '#ccc', 
        borderRadius: 12, 
        paddingHorizontal: 8, 
    },
    icon: {
        marginRight: 8, 
        color: '#022971', 
    },
    input: {
        flex: 1, 
        height: 40, 
        fontSize: 16, 
        color: '#0B1B39',
        fontFamily: 'bold',
    },
});

export default styles;
