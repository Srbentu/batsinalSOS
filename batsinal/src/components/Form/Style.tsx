import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    input:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight:21,
        letterSpacing: 0.25,
        color: '#000',
        border:'2px',
        boderColor: '#000',
        borderWidth: 2,
        margin:0,
        padding:0,
        width:'100%',
        paddingLeft: 10,
        height: 50,
        display: 'flex',
        marginBottom: 25,
        justifyContent: 'center',
        backgroundColor: '#fff',

    },
    btn:{
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight:21,
        letterSpacing: 0.25,
        backgroundColor: '#000',
        color: '#e5bf3c',
        margin: 10,
        padding: 10,
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    container:{
        width: '100%',
        padding: 20,
    }
});

export default styles;