import { ScrollView, View, Image, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/Styles";
import { Departamentos } from "../../constants/Departamentos";

function Usuario ({usuarioData}) {
    const usuario = usuarioData;

    const departamentoId = usuario.Departamento_Id;
    const Departamento = Departamentos.Departamentos[departamentoId];

    return(
        <ScrollView style={styles.root}>
            <View style={styles.usuarioContainer}>
                <Image source={{uri: usuario.Imagen}} style={styles.usuarioImagen}/>
                <Text style={styles.usuarioText}>{usuario.Nombre}</Text>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.dataInnerContainer}>
                    <Text style={styles.descripcionText}>{usuario.Descripcion}</Text>
                    <Text style={styles.departamentoText}>{Departamento}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default Usuario;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    usuarioContainer: {
        overflow: 'hidden',
        margin: 10,
        marginTop: 0, 
        paddingVertical: 10,
        flexDirection: 'row'
    },
    usuarioText: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary100,
        fontSize: 20,
        paddingTop: 25,
        paddingHorizontal: 8,
        paddingBottom: 0,
    },
    usuarioImagen: {
        borderRadius: 50,
        height: 70,
        width: 70,
        margin: 15, 
        marginHorizontal: 4
    },
    dataContainer: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        marginHorizontal: 4,
        alignItems: 'center',
    },
    dataInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 4,
        paddingVertical: 8,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: GlobalStyles.colors.primary700,
    },
    descripcionText: {
        flex: 3,
        fontSize: 15,
        color: GlobalStyles.colors.primary10,
        textAlign: 'justify',
        marginHorizontal: 10,
    },
    departamentoText: {
        flex: 1,
        textAlign: 'right',
        color: GlobalStyles.colors.accent600,
        marginHorizontal: 10,
    },
});