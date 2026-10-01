import { ScrollView, View, Image, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/Styles";
import { Departamentos } from "../../constants/Departamentos";
import { useNavigation} from '@react-navigation/native';

function PublicacionDetallada ({Data, usuarioData}) {
    const publicacion = Data;
    const usuario = usuarioData;
    const navigation = useNavigation();
    
    const departamentoId = publicacion.Departamento_Id;
    const Departamento = Departamentos.Departamentos[departamentoId];

    function selectUsuarioHandler(){
        navigation.navigate('UsuarioDetalles', {usuarioEmail: usuario.Email});
        console.log(usuario.Email)
    }

    return(
        <ScrollView style={styles.root}>
            <View style={styles.imagenContainer}>
                <Image source={{uri: publicacion.Imagen}} style={styles.imagen}/>
                <Text style={styles.titulo}>{publicacion.Titulo}</Text>
            </View>
            <View style={styles.presentationContainer}>
                <Pressable onPress={selectUsuarioHandler} style={({pressed}) => pressed && styles.boton}>
                    <View style={styles.usuarioContainer}>
                        <Image source={{uri: usuario.Imagen}} style={styles.usuarioImagen}/>
                        <Text style={styles.usuarioText}>{usuario.Nombre}</Text>
                    </View>
                </Pressable>
                <View style={styles.likesContainer}>
                </View>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.dataInnerContainer}>
                    <Text style={styles.descripcionText}>{publicacion.Descripcion}</Text>
                    <Text style={styles.departamentoText}>{Departamento}</Text>
                </View>
                <View style={styles.ubiContainer}>
                    <Text style={styles.ubiText}>{publicacion.Ubicacion}</Text>
                    <Text>Ubicacion de google maps</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default PublicacionDetallada;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    imagenContainer: {
        overflow: 'hidden',
        margin: 10,
        marginBottom: 0, 
        paddingVertical: 10,
    },
    imagen: {
        width: '100%',
        height: 350,
        borderRadius: 8,
    },
    titulo: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary10,
        fontSize: 20,
        paddingVertical: 8,
        paddingHorizontal: 8,
        paddingBottom: 0,
    },
    boton: {
        opacity: 0.5,
    },
    presentationContainer:{
        flexDirection: 'row',
    },
    usuarioContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 18
    },
    usuarioText: {
        color: GlobalStyles.colors.primary100
    },
    usuarioImagen: {
        borderRadius: 20,
        height: 30,
        width: 30,
        margin: 7, 
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
    ubiContainer: {
        margin: 32
    },
    ubiText: {
        color: GlobalStyles.colors.primary400,
    },
});