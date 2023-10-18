import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 30,
        paddingTop: 30,
    },
    form: {
        width: '100%',
    },
    formLabel: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 20,
        fontWeight: 'bold',
        
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#e0e5e5',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        width:'90%',
        backgroundColor: '#109010',
        paddingTop: 14,
        paddingBottom:14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: 'white',
    },
    errorMessage: {
        fontSize:12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exibitionResultImc: {
        width: "100%",
        height: "50%",

    }
})

export default styles