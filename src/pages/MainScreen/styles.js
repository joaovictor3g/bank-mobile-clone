import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        height: 80,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight = 20,
        backgroundColor: "#0066ff",
        
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    containerSec: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#0066ff",
    },  

    imageProfile: {
        width: 120,
        height: 120,
        borderWidth: 5,
        borderColor:"#ffff00",
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20,
    },

    myName: {
        marginTop: 10,
        fontSize: 28,
        color: "#FFF",
        fontWeight: "bold"
    },

    entrar: {
        marginTop: 40,
        width: 120,
        height: 50,
        backgroundColor: "#ffff00",
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "center",
        
    },

    buttonText: {
        fontSize: 18,
        color: "#0066ff",
        fontWeight: "bold",
    },

    outraConta: {
        marginTop: 10,
        fontWeight: "bold",
        color: "#FFF",
        fontSize: 18,
    },

    buttonsBottom: {
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#0066ff",
        alignItems: "center",
        padding: 20,

    },  
});